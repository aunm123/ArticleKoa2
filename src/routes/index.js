const router = require('koa-router')();
const HomeRoute = require('./home');
const PhotoRoute = require('./photo');
const ArticleRoute = require('./article');

module.exports = (app)=>{

	router.use('/home',HomeRoute.routes(),HomeRoute.allowedMethods());
	router.use('/photo',PhotoRoute.routes(),PhotoRoute.allowedMethods());
	router.use('/article',ArticleRoute.routes(),ArticleRoute.allowedMethods());

	router.get('/',async (ctx,next)=>{
        await next();
		await ctx.render('index', { name : "asdasdas"})
    });

	app.use(router.routes())
}