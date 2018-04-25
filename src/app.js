const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const path = require('path')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const kstatic = require('koa-static')

const routes = require('./routes');

// 使用ctx.body解析中间件
app.use(bodyParser());

// 静态资源目录对于相对入口文件index.js的路径
app.use(kstatic(
  path.join(__dirname, './static')
));
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
	extension: 'ejs'
}));

routes(app);

app.listen(8000, () => {
  console.log("app start");
});


