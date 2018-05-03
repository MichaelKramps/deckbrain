var squadCommandIO = {};

var utilities = require("../utilities.js");
var setup = require("./setup.js");

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
		// maybe pull this out to a settings file
		var screenSize = utilities.returnFullScreen();

		var g = ga(
		  screenSize.width, screenSize.height, setup.initiate
		);

		//Start the Ga engine.
		g.start();
	});
};

module.exports = squadCommandIO;