var squadCommandIO = {};
module.exports = squadCommandIO;

var squadCommandMongo = require("../mongo/squadCommandMongo.js");

/*** Local Functions ***/



/*** Exported Functions ***/

squadCommandIO.start = function(io, socket){
	
	socket.on("request-quick-match", function(){
		squadCommandMongo.searchForQuickMatch(function(game){
			socket.join(game._id, function(){
				if (game.pl === 2){
					io.to(game._id).emit("start-game");
				}
			});
		});
	});
};