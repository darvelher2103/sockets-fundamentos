 //funciones que queremos que se disparen cuando resivamos informacion 
 //del servidor o cuando queramos enviar info al servidor 

 var socket = io();

 //Esta funcion pérmite saber cuando tengo un canal de comunicacion abierto
 //Entre Cliente - Servidor

 // "on" son para escuchar
 socket.on('connect', function() { //para conectarse..
     console.log('Conectado al servidor');
 });

 socket.on('disconnect', function() { //para desconectarse..
     console.log('Perdimos conexión con el servidor');
 });

 // "emit" son para enviar información 
 socket.emit('enviarMensaje', { //parametros:  a la funcion se le pasa => objeto y callback
         usuario: 'darwin',
         mensaje: 'Hola mundo'
     },
     function(resp) {
         console.log("Respuesta server", resp);
     }
 );

 // "on" escuchar información
 socket.on('enviarMensaje', function(mensaje) {
     console.log('Servidor: ', mensaje);
 });