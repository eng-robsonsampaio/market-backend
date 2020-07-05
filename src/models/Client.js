const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String, 
    avatar: String,
    clientStatus: Boolean, 
    phone: {
        ddd: Number,
        phone_number: Number
    },
    address:{
        street: String,
        number: String, 
        complement: String
    },
    basket:[{
        product: String,
        quantity: Number,
        weight: Number,
        itemStatus: Boolean
    }],
});

module.exports = mongoose.model('Client', ClientSchema)