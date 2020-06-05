const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('Client', ClientSchema)