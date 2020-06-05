const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')
const app = express();

// Conecção com o banco de dados
mongoose.connect('mongodb+srv://market:market@cluster0-ldufr.mongodb.net/marketdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()) // precisa vir antes das rotas
app.use(routes)


app.listen(3333);