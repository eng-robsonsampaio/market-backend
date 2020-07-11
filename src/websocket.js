const socketio = require('socket.io');

let io;
const connections = []; // usar uma tabela do banco para guardar esse valor

exports.setupWebsocket = (server) => {
    io = socketio(server);

    io.on('connection', (socket) => {
        console.log(socket.id);
        connections.push({
            id: socket.id,
        })
    });
};

exports.findConnections = () => {
    return connections.map((connection) => {
      return connection
    })
}


exports.sendMessage = (to, message, data) => {
    to.forEach((connection) => {
        io.to(connection.id).emit(message, data)      
    })
  
}