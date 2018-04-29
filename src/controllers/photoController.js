const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let photoController = {
	
	list: async (ctx, next) => {
		
		await next();
		await ctx.render('photo/photo_lsit', {
		});
		
	},
	
	index: async (ctx, next) => {

		let article = {}

		await next();
		await ctx.render('photo/photo_detail', {
			article
		});

	},
}

module.exports = photoController;