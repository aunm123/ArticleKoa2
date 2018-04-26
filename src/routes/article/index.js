const articleRoute = require('koa-router')();
const articleController = require('../../controllers/articleController');

articleRoute.get('/:aid', articleController.index);


module.exports = articleRoute;