const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let homeController = {
	home: async (ctx, next) => {
		
		
		
		
		
		await next();
		console.log("i am in index")
		await ctx.render('home/index', {});
	},
}

module.exports = homeController;