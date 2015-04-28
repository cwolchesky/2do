var server = require('./server');
var resources = require('./resources');

//List resources
server.get('/lists', resources.lists.list);
server.put('/lists/:listname', resources.lists.create); // I.e., PUT /lists/myList
server.del('/lists/:listname', resources.lists.del);

//Item resources
server.get('/lists/:listname/items', resources.items.list);
server.post('/lists/:listname/items', resources.items.create);
server.del('/lists/:listname/items/:item', resources.items.del);
