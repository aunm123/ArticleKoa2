const homeRoute = require('koa-router')();
const homeController = require('../../controllers/homeController');

homeRoute.get('/', homeController.home);


module.exports = homeRoute;