const rq = require('request-promise');
const {reqUrl} = require('../util/Config.js');

let homeController = {
	home: async (ctx, next) => {

		let op = reqUrl('/article/listAdvancePhoto', {count: 10});
		let advance_photo = await rq(op);
		advance_photo = JSON.parse(advance_photo);

		let op3 = reqUrl('/article/listAdvanceText', {count: 10});
		let advance_text = await rq(op3);
		advance_text = JSON.parse(advance_text);

		let op2 = reqUrl('/movice/listAdvance', {count: 20});
		let advance_movice = await rq(op2);
		advance_movice = JSON.parse(advance_movice);

		await next();

		await ctx.render('home/index', {
			advance_photo,
			advance_text,
			advance_movice,
		});
	},
}

module.exports = homeController;