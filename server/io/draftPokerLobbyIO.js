var draftPokerIO = {};
module.exports = draftPokerIO;

var $ = require("jquery");
var draftPokerMongo = require("../mongo/draftPokerMongo.js");

/*** Local Functions ***/



/*** Exported Functions ***/

draftPokerIO.start = function(io){
	io.on('connection', function(socket){
		// a user connected to the draft poker lobby
		
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
		
	});
};