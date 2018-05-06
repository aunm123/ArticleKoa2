const path = require('path');
const webpack = require('webpack');
const _externals = require('externals-dependencies');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		app: [
			'./src/app.js'
		]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions: [".js"]
	},
	target: 'node',
	externals: _externals(),
	context: __dirname,
	node: {
		console: true,
		global: true,
		process: true,
		Buffer: true,
		__filename: true,
		__dirname: true,
		setImmediate: true,
		path: true
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new CopyWebpackPlugin([
				{from: __dirname + '/src/views', to: __dirname + '/dist/views'},
				{from: __dirname + '/src/static', to: __dirname + '/dist/static'}
			])
	]
}
