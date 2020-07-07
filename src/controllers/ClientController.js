const Client = require('../models/Client');
const { update } = require('../models/Client');

// index= listar, show=monstrar um, store=gravar, update, destroy

module.exports = {

    async index(request, response) {
        const clients = await Client.find();
        return response.json(clients)
    },

    async update(request, response){
        const { _id, item_id, itemStatus } = request.body

            const client = await Client.updateOne({ _id }, 
                {
                    $set:{
                        ["basket."+ item_id +".itemStatus"]:itemStatus
                    }

                })

        
        return response.json(client);
    },

    async store(request, response) {
        const { name, avatar, clientStatus, phone, address, basket } =  request.body

        let client = await Client.findOne({ phone })

        // Evita cadastrar dois usuários com os mesmos telefones
        if(!client){
            client = await Client.create({
                name,
                avatar, 
                clientStatus,
                phone,
                address,
                basket        
            })
        }

    // console.log(client)
    return response.json(client);
    }
}