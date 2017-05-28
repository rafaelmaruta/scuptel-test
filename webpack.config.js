// Para mudar para produção, digitar o comando no terminal: SET NODE_ENV=production
// Para desenvolvimento: SET NODE_ENV=development

var webpack = require('webpack'),
	prod = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './App/js/App.js',
    output: {
        path: './public/static',
		filename: prod ? 'app.min.js' : 'app.js'
    },
	devServer: {
	    inline: true,
	    contentBase: './public',
	    port: 3000

	},
	devtool: 'source-map',
	module: {
	    loaders: [{
	        test: /\.js$/,
	        exclude: /node_modules/,
	        loader: 'babel',
	        query: {
	            presets: ['es2015', 'react']
	        }
	    }]
	},
	plugins: prod ? [
	    new webpack.optimize.UglifyJsPlugin({
	    	output: { comments: false },
			compress: { warnings: false }
	    })
	] : []
}