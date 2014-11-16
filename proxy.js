// 代理 java接口  todo cookie post 之类
var server = require('./config').server;
module.exports = function(app) {
    var http = require('http');
    app.all(server.path, function(req, res, next) {
        var options = {
            hostname: server.hostname,
            port: server.port,
            method : req.method,
            path : req.originalUrl
        };
        options.headers = req.headers;
        // options.headers['content-type'] = 'application/json';
        // console.log(options);
        // options.headers.host = 'designmodo.github.io';//如果不设置这个host，则返回404.。。
        // console.log(options.hostname + options.path);

        var proxy = http.request(options, function(response) {
            res.writeHead(response.statusCode, response.headers);
            response.pipe(res);
        });
        req.pipe(proxy);
    });
}
