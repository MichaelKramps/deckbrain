var levels = require("./levels.js");
var drawMap = require("./drawMap.js");
var utils = require("./utils.js");

// have them enter a code and then remove/hide all items they don't have permission to use yet
// maybe pick a username and pair a code with that?

var unlockCode = utils.getUnlockCode();

if (unlockCode){
	drawMap.draw(levels, unlockCode);
} else {
	unlockCode = utils.createAndReturnUnlockCode({level: 1, armor: 1, body: 1, item: 1, weapon: 1});
	document.cookie = "unlockCode=" + unlockCode;
	drawMap.draw(levels, unlockCode);
}



// Game Ideas
//
// Have stages with a few enemies and a boss (victory gives you rewards to choose from)
// In order to avoid use of a database use progress codes (like Mega Man X)
//
// Two game modes (Campaign and Endless Arena)
// Campaign to more easily gain experience and items
// Endless arena to measure the strength of your team and get rare items