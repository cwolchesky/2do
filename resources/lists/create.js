module.exports = function createList(req, res, next) {
	res.send({hey: 'there'});
	next();
};