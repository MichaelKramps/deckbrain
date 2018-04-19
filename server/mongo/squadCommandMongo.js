var squadCommandMongo = {};
module.exports = squadCommandMongo;

var config = require("../config.js");
var mongoose = require("mongoose");
var db = mongoose.createConnection(config.mongo.squadCommand);

/*** Schemas/Models ***/

var gameSchema = mongoose.Schema({
	pl: Number,
});

var quickMatchModel = db.model("quickMatches", gameSchema);

/*** Data ***/



/*** Exported Functions ***/

squadCommandMongo.searchForQuickMatch = function(callback){
	quickMatchModel.findOne({pl: 1}, "_id, pl", function(err, game){
		if (err) {return err};
		if (game) {
			squadCommandMongo.joinQuickMatch(game, callback);
		} else {
			squadCommandMongo.newQuickMatch(game, callback);
		}
	});
};

squadCommandMongo.newQuickMatch = function(game, callback){
	var newGame = new quickMatchModel({
		pl: 1,
	});
	newGame.save(function(err, game){
		callback({gameId: game._id, pl: 1});
	});
};

squadCommandMongo.joinQuickMatch = function(game, callback){
	// if players = 1, then join
	quickMatchModel.findOneAndUpdate({_id: game._id, pl: 1}, {$set: {"pl": 2}}, function(err, game){
		if (game) {
			callback({gameId: game._id, pl: 2});
		} else {
			searchForQuickMatch(callback);
		}
	});
};