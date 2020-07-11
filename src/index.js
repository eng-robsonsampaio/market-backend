const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app)

setupWebsocket(server)

// Conecção com o banco de dados
mongoose.connect('mongodb+srv://market:market@cluster0-ldufr.mongodb.net/marketdb?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json()) // precisa vir antes das rotas
app.use(routes)


server.listen(3333);