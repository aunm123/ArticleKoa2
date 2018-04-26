const videoRoute = require('koa-router')();
const videoController = require('../../controllers/videoController');

videoRoute.get('/:aid', videoController.index);


module.exports = videoRoute;