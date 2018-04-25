const photoRoute = require('koa-router')();
const photoController = require('../../controllers/photoController');

photoRoute.get('/', photoController.index);


module.exports = photoRoute;