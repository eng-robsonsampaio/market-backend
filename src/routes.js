const { Router } = require('express');
const Client = require('./models/Client')
const ClientList = require('./models/ClientList')

const routes = Router();

routes.post('/clients', async (request, response) => {
    const {name, address, basket } =  request.body

    const client = await Client.create({
        name, 
        address,
        basket

    })
    console.log(client)
    return response.json(client);
});

routes.post('/clientList', async (request, response) => {
    const { clientList } =  request.body
    const list = await ClientList.create({
        clientList
    });

    console.log(list)
    return response.json(list)
});

module.exports = routes