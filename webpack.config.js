var path = require('path');
var makeConfig = require('phrontend-webpack');
var __PROD__ = process.env.NODE_ENV==='production';
var __DEV__  = !__PROD__;

module.exports = makeConfig({
	src: __dirname, // required
	dest: './public',
	library: 'todoapp',
	publicPath: 'public/',
	minimize: __PROD__,
	hot: __DEV__,
	separateStylesheet: __PROD__,
	//transpile: 'my-other-module'
	cssLocalImports: true,
	moduleDirectories: path.join(__dirname, 'src'),
	dedupe: __PROD__,
	debug: __DEV__,
	devtool: __PROD__ ? 'source-map' : 'cheap-module-inline-source-map',
	browsers: ['Chrome > 36']
});
