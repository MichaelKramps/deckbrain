var levels = require("./levels.js");
var utils = require("./utils.js");
var drawMap = require("./drawMap.js");
var showTeams = require("./showTeams.js");
var fight = require("./fight.js");

var challenges = function(myTeam, enemyNum = 0){
	var level = levels[utils.levelCode()];
	
	if (enemyNum === level.enemies.length){ // moving on to the next challenge
		enemyNum = 0;
		
		// create new unlock code and set cookie
		
		// show reward for defeating this challenge
		
		
		// drawMap.draw(levels, utils.getLevel() + 2);
		
	} else { // fighting a new enemy in this challenge
	
		var rawEnemyTeam = level.enemies[enemyNum];
		var enemyTeam = JSON.parse(JSON.stringify(rawEnemyTeam)); // must copy so we can change stats without affecting data.js
		var battlefield = {myTeam: myTeam, enemyTeam: enemyTeam};
		var gameObject = {battlefield: battlefield, enemyNum: enemyNum, challenges: challenges};
		
		showTeams(gameObject);
		fight(gameObject); // after fight, move on to next enemy
	}
};

module.exports = challenges;