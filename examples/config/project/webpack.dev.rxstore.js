var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var webpackDev = require('../webpack.dev.js');

const PROJECT = 'rxstore';

module.exports = webpackMerge(webpackDev, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'PROJECT': JSON.stringify(PROJECT)
            }
        })]
});