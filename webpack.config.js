var path = require('path');
var webpack = require('webpack');

module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 3000
    },
    devtool: ['cheap-module-eval-source-map', 'inline-source-map'],
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                  presets:['react','es2015']
                }
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'build',
        filename: 'bundle.min.js',
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
