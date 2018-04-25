const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let homeController = {
	home: async (ctx, next) => {
		await next();
		console.log("i am in index")
		await ctx.render('home/index', {});
	},
	list: async (ctx, next) => {
		await next();

		let op = reqUrl('/category/list');

		let response = await rq(op);

		console.log(response);

		await ctx.render('home/list', {
			userlist: [
				{name: 'gailun'},
				{name: 'gailun1'},
				{name: 'gailun2'},
				{name: 'gailun3'},
				{name: 'gailun4'},
				{name: 'gailun5'},
			]
		})
	}
}

module.exports = homeController;