var draftPokerIO = {};
module.exports = draftPokerIO;

var $ = require("jquery");
var draftPokerMongo = require("../mongo/draftPokerMongo.js");

/*** Local Functions ***/

var addTwoPlayerGameToList = function(gameId){
	var gameListHtml = '<li id="' + gameId + '">Join Game ' + gameId.substr(gameId.length - 4) + '</li>';
	$("#two-person-game-list").append(gameListHtml).find("#" + gameId).on("click", function(){
		console.log("clicked on " + gameId);
	})
};

/*** Exported Functions ***/

draftPokerIO.start = function(io){
	io.on('connection', function(socket){
		console.log('a user connected to the draft poker lobby');
		
		socket.on("draftPokerTwoPerson", function(){
			draftPokerMongo.newGame(addTwoPlayerGameToList);
		});
	});
}