var draftPokerIO = {};
module.exports = draftPokerIO;

var $ = require("jquery");
var draftPokerMongo = require("../mongo/draftPokerMongo.js");

/*** Local Functions ***/



/*** Exported Functions ***/

draftPokerIO.start = function(socket){
	
	draftPokerMongo.returnOpenTwoPlayerGames(function(games){
		socket.emit("listOpenTwoPlayerGames", games)
	});
	
	socket.on("draftPokerTwoPerson", function(){
		draftPokerMongo.newGame(function(){
			draftPokerMongo.returnOpenTwoPlayerGames(function(games){
				socket.emit("listOpenTwoPlayerGames", games)
			});
		});
	});
		
};