var draftPokerIO = {};
module.exports = draftPokerIO;

var $ = require("jquery");
var draftPokerMongo = require("../mongo/draftPokerMongo.js");

/*** Local Functions ***/

var listTwoPlayerGames = function(games){
	socket.emit("listOpenTwoPlayerGames", games);
};

/*** Exported Functions ***/

draftPokerIO.start = function(io){
	io.on('connection', function(socket){
		console.log('a user connected to the draft poker lobby');
		
		draftPokerMongo.returnOpenTwoPlayerGames(function(games){
			socket.emit("listOpenTwoPlayerGames", games)
		});
		
		socket.on("draftPokerTwoPerson", function(){
			draftPokerMongo.newGame(listTwoPlayerGames);
		});
	});
}