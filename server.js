var restify = require('restify');
var bunyan = require('bunyan');

var options = {
	name: "2do API"
}

var server = restify.createServer(options);

server.use(function(req, res, next){
	console.log("Middleware 1 here", req.body);
	next();
});

server.use(restify.bodyParser({
	maxBodySize: 10 * 1024
}));

server.use(function(req, res, next){
	console.log("Middleware 2 here", req.body);
	next();
});

server.on('after', restify.auditLogger({
	log: bunyan.createLogger({
		name: 'audit',
		stream: process.stdout
	})
}));

module.exports = server;

require('./routes');