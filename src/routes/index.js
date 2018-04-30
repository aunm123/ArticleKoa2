const router = require('koa-router')();
const HomeRoute = require('./home');
const PhotoRoute = require('./photo');
const ArticleRoute = require('./article');
const VideoRoute = require('./video');
const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');


module.exports = (app)=>{

	router.use('/home',HomeRoute.routes(),HomeRoute.allowedMethods());
	router.use('/photo',PhotoRoute.routes(),PhotoRoute.allowedMethods());
	router.use('/article',ArticleRoute.routes(),ArticleRoute.allowedMethods());
	router.use('/video',VideoRoute.routes(),VideoRoute.allowedMethods());

	router.get('/',async (ctx,next)=>{
        await next();
		await ctx.render('index', { name : "asdasdas"})
    });

	// 所有页面都获取分类信息
	app.use(async (ctx,next)=>{
		
		let op = reqUrl('/category/list', {});
		
		let categories = await rq(op);
		categories = JSON.parse(categories);
		
		let tempCat = [];
		
		categories.forEach(function (item) {
			if (item.level === 1){
				tempCat.push(item);
			}
		});
		tempCat.forEach(function (item) {
			item.chirld = [];
			categories.forEach(function (cat) {
				if (item.id === cat.parentid){
					item.chirld.push(cat);
				}
			})
		});
		
		ctx.state.categories = tempCat;
		
		await next();
	});
	app.use(router.routes())
}