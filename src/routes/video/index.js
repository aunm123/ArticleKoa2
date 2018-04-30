const videoRoute = require('koa-router')();
const videoController = require('../../controllers/videoController');

videoRoute.get('/detail/:videoid', videoController.detail);
videoRoute.get('/list/:mcategoryid/:page', videoController.list)
videoRoute.get('/play/:videoid', videoController.play);


module.exports = videoRoute;