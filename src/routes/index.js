const router = require('koa-router')();
const HomeRoute = require('./home');

module.exports = (app)=>{

	router.use('/home',HomeRoute.routes(),HomeRoute.allowedMethods());

	router.get('/',async (ctx,next)=>{
        await next();
		await ctx.render('index', { name : "asdasdas"})
    });

	app.use(router.routes())
}