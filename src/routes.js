const { Router } = require('express');
const ClientController = require('./controllers/ClientController')


const routes = Router();

routes.post('/clients', ClientController.store);

routes.put('/clients', ClientController.update);

routes.get('/clients', ClientController.index);


module.exports = routes