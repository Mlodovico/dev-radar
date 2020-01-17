const socketio = require('socket.io');
const parseStringAsArray = require('./utils/parseStringAsArray');
const calculateDistance = require('./utils/calculateDistance');

let io;
const connectios = [];

exports.setupWebSocket = (server) => {
    io = socketio(server);

    io.on('connect', socket => {
        const { latitude, longitude, techs } = socket.handshake.query;
    
        connectios.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude),
            },
            techs: parseStringAsArray(techs),
        })
    });
};

exports.findConnections = ( coordinates, tehcs ) => {
    return connectios.filter(connectios => {
        return calculateDistance(coordinates, connectios.coordinates) < 10 
            && this.findConnections.techs.some(item => techs.include(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.array.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
}