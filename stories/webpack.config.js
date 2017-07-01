const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const HTMLPlugin = require('html-webpack-plugin');

const resolve = (relative) => path.resolve(__dirname, '..', relative);

module.exports = {
	resolve: {
		extensions: ['.js', '.jsx', '.css', '.less'],
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				include: [
					resolve('./src'),
				],
				test: /\.jsx?$/,
			},
			{
				use: [
					'style-loader',
					'css-loader?modules',
					'less-loader',
				],
				include: [
					resolve('./src/components'),
				],
				test: /\.(css|less)?$/,
			},
			{
				use: [
					'style-loader',
					'css-loader',
					'less-loader',
				],
				exclude: [
					resolve('./src/components'),
				],
				test: /\.(css|less)?$/,
			},
		],
	},
};
