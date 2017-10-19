var showMyTeam = require("./showMyTeam.js");
var showEnemyTeam = require("./showEnemyTeam.js");

var showTeams = function(gameObject){
	showMyTeam(gameObject.battlefield.myTeam);
	showEnemyTeam(gameObject.battlefield.enemyTeam);
}

module.exports = showTeams;