/***** Initiate express(used for routing and middleware) *****/
var express = require('express');
var app = express();


/***** Set view engine and view path *****/
var path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


/***** Routing *****/
app.get('/', function(req, res){
	res.render('manager');
});


var config = require('./config.js');
var server = require('http').Server(app);
server.listen(config.ports.http, function(){
	console.log("Server listening on port " + config.ports.http);
});
var secureServer = require('https').Server(config.secureOptions, app);
secureServer.listen(config.ports.https, function(){
	console.log("Secure server listening on port " + config.ports.https);
});