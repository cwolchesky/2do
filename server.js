var restify = require('restify');

var options = {
	name: "2do API"
}

var server = restify.createServer(options);

module.exports = server;

require('./routes');