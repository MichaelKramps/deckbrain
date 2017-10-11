var data = require("./data.js");
var showTeam = require("./showTeam.js");
var showEnemy = require("./showEnemy.js");
var fight = require("./fight.js");

var challenges = function(team, enemyNum = 0, round = 1){
	if (enemyNum === data.enemies.length){
		enemyNum = 0;
		round += 1; // if all enemies have been killed, move on to next round
	}
	
	var enemyTeam = data.enemies[enemyNum];
	showTeam(team);
	showEnemy(enemyTeam);
	
	var callbackObject = {callback: challenges, team: team, enemyNum: enemyNum, round: round};
	fight(team, enemyTeam, callbackObject); // after fight, move on to next enemy
};

module.exports = challenges;