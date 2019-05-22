const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	entry: {
		// polyfills: './src/scripts/polyfills.js',
		app: './src/scripts/index.js',
		'css/style': './src/styles/index.less',
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './www',
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/pages/index.html',
			excludeChunks: ['polyfills'],
		}),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
		}),
		new MiniCssExtractPlugin({
			// Options similar to the same options in webpackOptions.output
			// both options are optional
			filename: '[name].css',
			chunkFilename: '[id].css',
		})],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'www'),
		publicPath: '',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'js/vendors',
					chunks: 'all',
				},
			},
		},
	},
	// externals: {
	// 	lodash: {
	// 		commonjs: 'lodash',
	// 		commonjs2: 'lodash',
	// 		amd: 'lodash',
	// 		root: '_',
	// 	},
	// },
	module: {
		rules: [
			{
				test: /\.js$/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(less)$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'less-loader',
				],
			},
			{
				test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
							name: '[name].[ext]',
							outputPath: 'fonts',
							publicPath: '../fonts',

						},
					},
				],
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'img',
							publicPath: '../img',
							name: '[name].[ext]',
							limit: 100,
						},
					},
				],
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							attrs: [':data-src'],
						},
					},
				],
			},
		],
	},
};