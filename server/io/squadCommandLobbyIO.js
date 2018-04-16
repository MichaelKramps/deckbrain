var squadCommandIO = {};
module.exports = squadCommandIO;

var squadCommandMongo = require("../mongo/squadCommandMongo.js");

/*** Local Functions ***/



/*** Exported Functions ***/

squadCommandIO.start = function(socket){
	
	socket.on("request-quick-match", function(){
		squadCommandMongo.searchForQuickMatch(function(game){
			console.log(game);
		});
	});
	
};