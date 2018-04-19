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
var io = require('socket.io')(secureServer);
var socketRoutes = require('./socketRoutes');
socketRoutes.start(io);


/***** Routing *****/
var routes = require('./routes.js');
routes.set(app, express); // separate socket functionality files used depending on the route


server.listen(config.ports.http, function(){
	console.log("Server listening on port " + config.ports.http);
});
secureServer.listen(config.ports.https, function(){
	console.log("Secure server listening on port " + config.ports.https);
});