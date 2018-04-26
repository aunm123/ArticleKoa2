const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let articleController = {
	index: async (ctx, next) => {
		let aid = ctx.params.aid;
		console.log(aid);

		let op = reqUrl('/article/find', {articleid: aid});

		let article = await rq(op);
		article = JSON.parse(article);

		await next();
		await ctx.render('detail/photo_detail',{
			article
		});

	},
}

module.exports = articleController;