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
// force https
app.use(function (req, res, next) {
	if (req.secure) {
		// request was via https, so do no special handling
		next();
	} else {
		// request was via http, so redirect to https
		res.redirect('https://' + req.hostname + req.originalUrl);
	}
});


/***** IO *****/
var socketIO = require('socket.io')(secureServer);
var io = require('./io.js');
io.Start(socketIO);

/***** Routing *****/
app.get('/', function(req, res){
	res.render('static-page');
});



server.listen(config.ports.http, function(){
	console.log("Server listening on port " + config.ports.http);
});
secureServer.listen(config.ports.https, function(){
	console.log("Secure server listening on port " + config.ports.https);
});