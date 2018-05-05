const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let videoController = {
	detail: async (ctx, next) => {
		let videoid = ctx.params.videoid;
		let op = reqUrl('/movice/find', {moviceid: videoid});
		let video = await rq(op);
		video = JSON.parse(video);

		let op2 = reqUrl('/mcategory/find', {mcategoryid: video.mcategoryId});
		let current_category = await rq(op2);
		current_category = JSON.parse(current_category);

		await next();
		await ctx.render('video/video_detail',{
			video,
			current_category
		});

	},
	list: async (ctx, next) => {
		// /list/:mcategoryid/:page
		let mcategoryid = ctx.params.mcategoryid;
		let page = ctx.params.page;

		let op = reqUrl('/movice/listWithPage', {mcategoryid: mcategoryid, page: page});
		let videos = await rq(op);
		videos = JSON.parse(videos);

		let op2 = reqUrl('/mcategory/find', {mcategoryid: mcategoryid});
		let current_category = await rq(op2);
		current_category = JSON.parse(current_category);


		await next();
		await ctx.render('video/video_list', {
			videos,
			current_category,
			page,
			pageCount: Math.ceil(videos.count / 20.0)
		});

	},
	play: async (ctx, next) => {
		// /play/:videoid
		let videoid = ctx.params.videoid;
		let op = reqUrl('/movice/find', {moviceid: videoid});
		let video = await rq(op);
		video = JSON.parse(video);

		let op2 = reqUrl('/mcategory/find', {mcategoryid: video.mcategoryId});
		let current_category = await rq(op2);
		current_category = JSON.parse(current_category);

		let hasReadop = reqUrl('/count/hasReadMovice', {moviceid: videoid});
		await rq(hasReadop);

		await next();
		await ctx.render('video/video_play',{
			video,
			current_category
		});

	}
}

module.exports = videoController;