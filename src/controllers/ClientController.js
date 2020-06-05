const Client = require('../models/Client')

// index= listar, show=monstrar um, store=gravar, update, destroy

module.exports = {

    async index(request, response) {
        const clients = await Client.find();
        return response.json(clients)
    },

    async store(request, response) {
        const {name, phone, address, basket } =  request.body

        let client = await Client.findOne({ phone })

        // Evita cadastrar dois usuários com os mesmos telefones
        if(!client){
            client = await Client.create({
                name, 
                phone,
                address,
                basket
        
            })
        }

    console.log(client)
    return response.json(client);
    }
}