const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let photoController = {
	
	index: async (ctx, next) => {
		await next();
		await ctx.render('detail/photo_detail', {});
	},
}

module.exports = photoController;