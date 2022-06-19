const express = require('express');
const app = express();

//creamos un servidor http a partir de la libreria de express
const http = require('http').Server(app);
//Para generar una comunicacion vamos a trabajar con Socket.io
const io = require('socket.io')(http);

//rutas

app.use(require('./routes/stream.routes'));

//donde vamos a cargar los html donde vamos a trabajar
app.use(express.static(__dirname+"/public"))

io.on('connection', (socket)=>{
    socket.on('stream', (image)=>{
        console.log(image);
        //emitir el evento a todos los sockets, aqui tambien se hace la logica de respecto al proceso de imagenes.
        socket.emit('stream',image);
    })
})

module.exports = http;