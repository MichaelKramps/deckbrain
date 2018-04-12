var squadCommandIO = {};
module.exports = squadCommandIO;

var squadCommandMongo = require("../mongo/squadCommandMongo.js");

/*** Local Functions ***/



/*** Exported Functions ***/

squadCommandIO.start = function(io){
	io.on('connection', function(socket){
		// a user connected to the draft poker lobby
		socket.on("request-quick-match", function(){
			console.log("quick match requested");
		});
	});
};