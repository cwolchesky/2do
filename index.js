var server = require('./server');

var port = Number(process.env.SERVER_PORT) || 8080;

server.listen(port, function() {
	console.log('2do API server listening on %j', server.address());
});