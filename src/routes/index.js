const router = require('koa-router')();
const HomeRoute = require('./home');
const PhotoRoute = require('./photo');
const ArticleRoute = require('./article');
const VideoRoute = require('./video');
const rq = require('request-promise');
const {reqUrl, imghost} = require('../util/Config.js');
const homeController = require('../controllers/homeController');


module.exports = (app)=>{

	router.use('/home',HomeRoute.routes(),HomeRoute.allowedMethods());
	router.use('/photo',PhotoRoute.routes(),PhotoRoute.allowedMethods());
	router.use('/article',ArticleRoute.routes(),ArticleRoute.allowedMethods());
	router.use('/video',VideoRoute.routes(),VideoRoute.allowedMethods());

	router.get('/', homeController.home);

	// 所有页面都获取分类信息
	app.use(async (ctx,next)=>{
		
		let op = reqUrl('/category/list', {});
		
		let categories = await rq(op);
		categories = JSON.parse(categories);
		
		let tempCat = [];
		let tempmCat = [];
		
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

		let op2 = reqUrl('/mcategory/list', {});
		let mcategories = await rq(op2);
		mcategories = JSON.parse(mcategories);

		tempmCat.push({
			name: "电影专区",
			chirld:mcategories});

		let tempA = [];
		let tempP = [];
		tempCat.forEach((item)=>{
			if(item.parentid===7||item.id===7){
				tempP.push(item);
			}
			if(item.parentid===18||item.id===18){
				tempA.push(item);
			}
		});
		ctx.state.pcategories = tempP;
		ctx.state.acategories = tempA;

		ctx.state.mcategories = tempmCat;
		ctx.state.imghost = imghost;
		ctx.state.title = '';
		
		await next();
		ctx.status = 200;
	});
	app.use(router.routes())
}