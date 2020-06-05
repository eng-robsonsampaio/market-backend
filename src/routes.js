const { Router } = require('express');

const ClientList = require('./models/ClientList')
const ClientController = require('./controllers/ClientController')


const routes = Router();

routes.post('/clients', ClientController.store);

routes.get('/clients', ClientController.index);


module.exports = routes