const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name: String, 
    avatar: String,
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
        state: Boolean
    }],
});

module.exports = mongoose.model('Client', ClientSchema)