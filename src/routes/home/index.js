const homeRoute = require('koa-router')();
const homeController = require('../../controllers/homeController');

homeRoute.get('/', homeController.home);
homeRoute.get('/list', homeController.list);


module.exports = homeRoute;