var $ = require("jquery");
var data = require("./data.js");
var showTeams = require("./showTeams.js");
var fight = require("./fight.js");

var challenges = function(myTeam, enemyNum = 0, round = 1){
	if (enemyNum === data.enemies.length){
		enemyNum = 0;
		round += 1; // if all enemies have been killed, move on to next round
	}
	
	var rawEnemyTeam = data.enemies[enemyNum];
	var enemyTeam = JSON.parse(JSON.stringify(rawEnemyTeam)); // must copy so we can change stats without affecting data.js
	var battlefield = {myTeam: myTeam, enemyTeam: enemyTeam};
	var gameObject = {battlefield: battlefield, enemyNum: enemyNum, round: round, challenges: challenges};
	
	showTeams(gameObject);
	fight(gameObject); // after fight, move on to next enemy
};

module.exports = challenges;