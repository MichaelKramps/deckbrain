var socketRoutes = {};

module.exports = socketRoutes;

var draftPokerLobbyIO = require("./io/draftPokerLobbyIO.js");
var squadCommandLobbyIO = require("./io/squadCommandLobbyIO.js");

socketRoutes.start = function(socketIO){
	socketIO.of("/squad-command").on('connection', function(socket){
		squadCommandLobbyIO.start(socket);
	});
	socketIO.of("/draft-poker").on('connection', function(socket){
		draftPokerLobbyIO.start(socket);
	});
};

