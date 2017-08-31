/***** Initiate express and servers *****/
var express = require('express');
var app = express();

var config = require('./config.js');
var server = require('http').Server(app);
var secureServer = require('https').Server(config.secureOptions, app);


/***** Set view engine and view path *****/
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

/***** Middleware *****/
var middleware = require('./middleware');
middleware.use(app);


/***** IO *****/
var socketIO = require('socket.io')(secureServer);
var io = require('./io.js');
io.start(socketIO);

/***** Routing *****/
var routes = require('./routes.js');
routes.set(app);


server.listen(config.ports.http, function(){
	console.log("Server listening on port " + config.ports.http);
});
secureServer.listen(config.ports.https, function(){
	console.log("Secure server listening on port " + config.ports.https);
});