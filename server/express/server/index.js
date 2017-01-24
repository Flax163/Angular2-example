var express = require('express');
var bodyParser = require("body-parser");
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackDevConfig = require("../config/webpack.dev.js");
var app = express();
app.use(bodyParser.json());
var compiler = webpack(webpackDevConfig);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: '/'}));
app.use(webpackHotMiddleware(compiler));


app.post('/rest/getQuery', function(req, res) {
    res.send({message: 'get query'});
});
app.post('/rest/postQuery', function(req, res) {
    res.send({message: 'post query'});
});

app.listen(9000, function () {
    console.log('Server Start port 9000');
});