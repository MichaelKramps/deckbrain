var draftPokerMongo = {};
module.exports = draftPokerMongo;

var config = require("../config.js");
var mongoose = require("mongoose");
var db = mongoose.createConnection(config.mongo.draftPoker);

/*** Schemas/Models ***/

var twoPlayerSchema = mongoose.Schema({
	pl: Number,
	p1: [{value: Number, suit: String, id: String}], // list of cards chosen by player 1
	p2: [{value: Number, suit: String, id: String}], // list of cards chosen by player 2
	av: [{value: Number, suit: String, id: String}], // list of cards that are still available to draft from
	un: [{value: Number, suit: String, id: String}], // list of "community" cards that are unavailable to draft
});

var twoPlayerModel = db.model("twoPlayerGames", twoPlayerSchema);

/*** Data ***/

var fullDeck = [
	{value: 2, suit: "d", id: "2d"},
	{value: 3, suit: "d", id: "3d"},
	{value: 4, suit: "d", id: "4d"},
	{value: 5, suit: "d", id: "5d"},
	{value: 6, suit: "d", id: "6d"},
	{value: 7, suit: "d", id: "7d"},
	{value: 8, suit: "d", id: "8d"},
	{value: 9, suit: "d", id: "9d"},
	{value: 10, suit: "d", id: "10d"},
	{value: 11, suit: "d", id: "jd"},
	{value: 12, suit: "d", id: "qd"},
	{value: 13, suit: "d", id: "kd"},
	{value: 14, suit: "d", id: "ad"},
	{value: 2, suit: "h", id: "2h"},
	{value: 3, suit: "h", id: "3h"},
	{value: 4, suit: "h", id: "4h"},
	{value: 5, suit: "h", id: "5h"},
	{value: 6, suit: "h", id: "6h"},
	{value: 7, suit: "h", id: "7h"},
	{value: 8, suit: "h", id: "8h"},
	{value: 9, suit: "h", id: "9h"},
	{value: 10, suit: "h", id: "10h"},
	{value: 11, suit: "h", id: "jh"},
	{value: 12, suit: "h", id: "qh"},
	{value: 13, suit: "h", id: "kh"},
	{value: 14, suit: "h", id: "ah"},
	{value: 2, suit: "c", id: "2c"},
	{value: 3, suit: "c", id: "3c"},
	{value: 4, suit: "c", id: "4c"},
	{value: 5, suit: "c", id: "5c"},
	{value: 6, suit: "c", id: "6c"},
	{value: 7, suit: "c", id: "7c"},
	{value: 8, suit: "c", id: "8c"},
	{value: 9, suit: "c", id: "9c"},
	{value: 10, suit: "c", id: "10c"},
	{value: 11, suit: "c", id: "jc"},
	{value: 12, suit: "c", id: "qc"},
	{value: 13, suit: "c", id: "kc"},
	{value: 14, suit: "c", id: "ac"},
	{value: 2, suit: "s", id: "2s"},
	{value: 3, suit: "s", id: "3s"},
	{value: 4, suit: "s", id: "4s"},
	{value: 5, suit: "s", id: "5s"},
	{value: 6, suit: "s", id: "6s"},
	{value: 7, suit: "s", id: "7s"},
	{value: 8, suit: "s", id: "8s"},
	{value: 9, suit: "s", id: "9s"},
	{value: 10, suit: "s", id: "10s"},
	{value: 11, suit: "s", id: "js"},
	{value: 12, suit: "s", id: "qs"},
	{value: 13, suit: "s", id: "ks"},
	{value: 14, suit: "s", id: "as"}
];

/*** Exported Functions ***/

draftPokerMongo.returnOpenTwoPlayerGames = function(callback){
	twoPlayerModel.find({pl: 1}, "_id", function(err, game){
		console.log(game);
		callback(game);
	});
};

draftPokerMongo.newGame = function(callback){
	var newGame = new twoPlayerModel({
		pl: 1,
		p1: [],
		p2: [],
		av: fullDeck,
		un: [],
	});
	newGame.save(function(err, game){
		draftPokerMongo.returnOpenTwoPlayerGames(callback);
	});
};

draftPokerMongo.joinGame = function(gameId){
	var id = mongoose.Types.ObjectId(gameId);
	 twoPlayerModel.findOne({"_id": id, pl: 1}, function(err, game){
        if (err) {return err};
        if (game) {
			// game is open
            // callback(game._id);
        } else {
			// game is no longer open
            // callback(0);
        }
    });
};