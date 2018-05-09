const videoRoute = require('koa-router')();
const videoController = require('../../controllers/videoController');

videoRoute.get('/detail/:videoid', videoController.detail);
videoRoute.get('/list/:mcategoryid/:page', videoController.list)
videoRoute.get('/play/:videoid', videoController.play);
videoRoute.get('/complain/:videoid', videoController.complain);

module.exports = videoRoute;