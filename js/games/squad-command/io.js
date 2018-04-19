var squadCommandIO = {};

var utilities = require("../utilities.js");

squadCommandIO.start = function (){
	var socket = io.connect("/squad-command");

	$("#quick-match").on("click", function(){
		socket.emit("request-quick-match");
	});

	socket.on("join-quick-match", function(gameId){
		utilities.setCookie("joinedGame", gameId, 1);
	});

	socket.on("start-game", function(){
		console.log("start-game");
	});
};

module.exports = squadCommandIO;