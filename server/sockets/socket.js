const { io } = require('../server');

io.on('connection', (client) => { // client objeto que contiene informacion de la computadora o de la conexion que se establecio 

    console.log('Usuario Conectado'); // para establecer una comunicacion activo - activo en ambos lugares

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicación'
    });

    client.on('disconnect', () => { // si el cliente se desconecta
        console.log('Usuario Desconectado');
    });

    //Escucha el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*
        if (mensaje.usuario) {
            //console.log("Todo salio bien!!");
            callback({
                resp: "Todo salio bien!!",
            });
        } else {
            //console.log("Todo salio malllllll!!");
            callback({
                resp: "Todo salio malllllll!!",
            });
        }
        */

    });

});