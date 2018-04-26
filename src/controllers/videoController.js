const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let videoController = {
	index: async (ctx, next) => {
		let aid = ctx.params.aid;
		console.log(aid);

		// let op = reqUrl('/video/find', {videoid: aid});
		//
		// let video = await rq(op);
		// video = JSON.parse(video);

		await next();
		await ctx.render('video/video_detail',{
		});

	},
}

module.exports = videoController;