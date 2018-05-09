const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let photoController = {

	list: async (ctx, next) => {
		// /list/:category/:page
		let categoryid = ctx.params.categoryid;
		let page = ctx.params.page;

		let op = reqUrl('/article/listWithPage', {categoryid: categoryid, page: page});
		let article = await rq(op);
		article = JSON.parse(article);

		let op2 = reqUrl('/category/find', {categoryid: categoryid});
		let current_category = await rq(op2);
		current_category = JSON.parse(current_category);

		ctx.state.title = current_category.name;
		await next();
		await ctx.render('photo/photo_lsit', {
			article,
			current_category,
			page,
			pageCount: Math.ceil(article.counts / 20.0)
		});

	},

	index: async (ctx, next) => {
		// /detail/:aid
		let aid = ctx.params.aid;

		let op = reqUrl('/article/find', {articleid: aid});
		let article = await rq(op);
		article = JSON.parse(article);

		let op2 = reqUrl('/category/find', {categoryid: article.categoryId});
		let current_category = await rq(op2);
		current_category = JSON.parse(current_category);

		let hasReadop = reqUrl('/count/hasReadArticle', {articleid: aid});
		await rq(hasReadop);
		ctx.state.title = article.name;
		await next();
		await ctx.render('photo/photo_detail', {
			article,
			current_category
		});

	},
}

module.exports = photoController;