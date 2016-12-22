const webpack = require('webpack');
const path = require('path');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    entry: PATHS.app,
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    resolve: {
		extensions: ['', '.js', '.jsx']
	},
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: PATHS.app,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                include: PATHS.app,
                loader: 'style!css?modules'
            }
        ]
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin()
    ]
}
