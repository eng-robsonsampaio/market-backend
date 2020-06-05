const mongoose = require('mongoose');

const ClientListSchema = new mongoose.Schema({
    clientList:[{
        name: String, 
        address:{
            street: String,
            number: String, 
            complement: String
        },
        basket:[{
            product: String,
            quantity: Number,
            weight: Number
        }],
    }]
})

module.exports = mongoose.model('ClientList', ClientListSchema)