var $ = require("jquery");
var data = require("./data.js");
var showTeam = require("./showTeam.js");
var showEnemy = require("./showEnemy.js");
var fight = require("./fight.js");

var challenges = function(team, enemyNum = 0, round = 1){
	if (enemyNum === data.enemies.length){
		enemyNum = 0;
		round += 1; // if all enemies have been killed, move on to next round
	}
	
	console.log(data.enemies);
	var rawEnemyTeam = data.enemies[enemyNum];
	var enemyTeam = JSON.parse(JSON.stringify(rawEnemyTeam)); // must copy so we can change stats without affecting data.js
	var battlefield = {team: team, enemyTeam: enemyTeam};
	showTeam(battlefield.team);
	showEnemy(battlefield.enemyTeam);
	
	var callbackObject = {callback: challenges, enemyNum: enemyNum, round: round};
	fight(battlefield, callbackObject); // after fight, move on to next enemy
};

module.exports = challenges;