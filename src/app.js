const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path');
const views = require('koa-views');
const bodyParser = require('koa-bodyparser');
const kstatic = require('koa-static');

const routes = require('./routes');

const log4js = require('./util/log4js');

// 使用ctx.body解析中间件
app.use(bodyParser());

// 静态资源目录对于相对入口文件index.js的路径
app.use(kstatic(
	'./static'
));
// 加载模板引擎
app.use(views('./views', {
	extension: 'ejs'
}));

routes(app);

// 404
app.use(async (ctx) => {
	ctx.status = 404;
	await ctx.render('error/404');
});

// logger
app.use(async (ctx, next) => {
	const start = new Date();
	await next();
	const ms = new Date() - start;
	log4js.resLogger(ctx, ms)
})

app.on('error', (err, ctx) => {
	log4js.errLogger(ctx, err);
	console.error('server error', err, ctx)
});

app.listen(8000, () => {
	console.log("app start");
});