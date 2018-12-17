const express = require('express'); //importamos el express 
const socketIO = require('socket.io'); // no trabaj directamente con app (aplicacion de express)
//trabaja con el servidor http que trae por defecto node
// realizamos una configuracion en el app de express para que trabaje en base a un servidor que se va a definir

const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app); //pequeño servidor de producción 

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

//inicializamos para saber cuando un usuario se conecta al server..
// IO = esta es la comunicacion del backend (usuarios conectados - disparar eventos)
//let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});