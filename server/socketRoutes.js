var socketRoutes = {};

module.exports = socketRoutes;

var draftPokerLobbyIO = require("./io/draftPokerLobbyIO.js");
var squadCommandLobbyIO = require("./io/squadCommandLobbyIO.js");

socketRoutes.start = function(io){
	
	var squadCommandIO = io.of("/squad-command");
	squadCommandIO.on('connection', function(socket){
		squadCommandLobbyIO.start(squadCommandIO, socket);
	});
	
	var draftPokerIO = io.of("/draft-poker");
	draftPokerIO.on('connection', function(socket){
		draftPokerLobbyIO.start(draftPokerIO, socket);
	});
};

