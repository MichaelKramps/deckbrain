var levels = require("./levels.js");
var drawMap = require("./drawMap.js");
var utils = require("./utils.js");


var unlockCode = utils.getUnlockCode();

if (unlockCode){
	drawMap.draw(levels, unlockCode);
} else {
	unlockCode = utils.createAndReturnUnlockCode({level: 1, armor: 1, body: 1, item: 1, weapon: 1});
	document.cookie = "unlockCode=" + unlockCode;
	drawMap.draw(levels, unlockCode);
}