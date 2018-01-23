var fs = require('fs');
var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        })
    } else {
        response.setHeader("Content-Type", "image/jpg; charset=utf8");
        fs.readFile('./images/picture.jpg', (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        })
    }
});
server.listen(8080);