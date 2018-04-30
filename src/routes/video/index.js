const videoRoute = require('koa-router')();
const videoController = require('../../controllers/videoController');

videoRoute.get('/:aid', videoController.index);
videoRoute.get('/play/:aid', videoController.play);


module.exports = videoRoute;