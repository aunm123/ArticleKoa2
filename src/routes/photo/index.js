const photoRoute = require('koa-router')();
const photoController = require('../../controllers/photoController');

photoRoute.get('/detail/:aid',photoController.index)
photoRoute.get('/list/:categoryid/:page', photoController.list);


module.exports = photoRoute;