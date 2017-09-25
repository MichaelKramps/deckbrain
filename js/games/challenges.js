var data = require("./data.js");
var showTeam = require("./showTeam.js");
var showEnemy = require("./showEnemy.js");
var fight = require("./fight.js");

var challenges = function(team){
	for (var i = 0; i < data.enemies.length; i++){
		var thisEnemy = data.enemies[i];
		showTeam(team);
		showEnemy(thisEnemy);
		fight();
	}
};

module.exports = challenges;