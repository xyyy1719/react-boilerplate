const path = require('path');
const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, 'app'),
    build: path.join(__dirname, 'build')
};

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        PATHS.app
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: PATHS.app
            },
            {
                test: /\.jsx$/,
                loader: 'babel?cacheDirectory',
                include: PATHS.app
            }
        ]
    },
    devServer: {
        contentBase: PATHS.build,
        historyApiFallback: true,
        colors: true,
        hot: true,
        inline: true,
        port: 3000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:3000'})
    ]
};
