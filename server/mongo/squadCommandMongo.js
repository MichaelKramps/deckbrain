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
	quickMatchModel.find({pl: 1}, "_id", function(err, game){
		console.log(game);
		callback(game);
	});
};