var http = require('http');

var server = http.createServer(function(request, response) {
  response.write('Hej på dig!');
  response.end();
});

server.listen(3000);