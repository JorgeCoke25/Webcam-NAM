const express = require('express');
const app = express();

//creamos un servidor http a partir de la libreria de express
const http = require('http').Server(app);

//rutas

app.use(require('./routes/stream.routes'));

//donde vamos a cargar los html donde vamos a trabajar
app.use(express.static(__dirname+"/public"))


module.exports = http;