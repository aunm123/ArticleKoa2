const articleRoute = require('koa-router')();
const articleController = require('../../controllers/articleController');

articleRoute.get('/detail/:aid',articleController.index)
articleRoute.get('/list/:categoryid/:page', articleController.list);


module.exports = articleRoute;