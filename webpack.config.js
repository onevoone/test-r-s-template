const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const modes = {
	development: 'development',
	production: 'production'
};

module.exports = {
	mode: modes.development,
	devtool: 'source-map',
	entry: {
		main: path.resolve(__dirname, 'src/index.tsx'),
	},
	// output: {
	// 	filename: 'bundle.js',
	// 	path: path.resolve(__dirname, 'build/'),
	// 	publicPath: '/'
	// },
	module: {
		rules: [
			// {
			// 	test: /\.worker\.ts$/,
			// 	use: { loader: 'worker-loader' }
			// },
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.(css|scss)$/, use: [{
					loader: 'style-loader' // creates style nodes from JS strings
				}, {
					loader: 'css-loader' // translates CSS into CommonJS
				}, {
					loader: 'sass-loader' // compiles Sass to CSS
				}]
			}, //css only files
			{
				test: /\.html$/i,
				use: { loader: 'html-loader', options: { attributes: false } }
			},
			{
				test: /\.(png|woff|woff2|eot|ttf)$/,
				use: { loader: 'file-loader' }
			},
			{
				test: /\.(jpg|jpeg|png|webp|gif)$/gi,
				use: { loader: 'url-loader' }
			},
			{
				test: /\.svg$/,
				use: ['@svgr/webpack', 'url-loader'],
			},
		]
	},
	resolve: {
		// extensions: ['*', '.js', '.ts'],
		// alias: {
		// 	'@assets': path.resolve(__dirname, 'src/assets/'),
		// 	'@features': path.resolve(__dirname, 'src/features/'),
		// 	'@lib': path.resolve(__dirname, 'src/lib/'),
		// 	'@ui': path.resolve(__dirname, 'src/ui/'),
		// },
	},
	devServer: {
		host: '0.0.0.0',
		port: 8000,
		hot: true,
		quiet: true,
		disableHostCheck: true,
		clientLogLevel: 'none',
		historyApiFallback: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/index.html',
		}),
		new webpack.ProvidePlugin({
			'React': 'react',
		}),
	]
};
