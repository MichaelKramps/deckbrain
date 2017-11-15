var levels = require("./levels.js");
var utils = require("./utils.js");
var reward = require("./reward.js");
var drawMap = require("./drawMap.js");
var showTeams = require("./showTeams.js");
var fight = require("./fight.js");

var challenges = function(myTeam, enemyNum = 0){
	var level = levels[utils.getActiveLevel()];
	if (enemyNum === level.enemies.length){ // moving on to the next challenge
		enemyNum = 0;
		// create new unlock code and set cookie
		var unlockCode = utils.getUnlockCode();
		var unlockObject = utils.createAndReturnUnlockObject(unlockCode);
		if ((utils.getActiveLevel() + 1) === unlockObject.level) { // if you just beat the highest unlocked level
			unlockObject.level += 1;
			// show reward for defeating this challenge
			reward.createAndShow(unlockObject);
		} else {
			drawMap.draw(levels, unlockCode);
		}
		
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