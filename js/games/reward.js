reward = {};

module.exports = reward;

var $ = require("jquery");
var data = require("./data.js");
var levels = require("./levels.js");
var utils = require("./utils.js");
var drawMap = require("./drawMap.js");

var findReward = function(rewardList, unlockValue){
	for (var i = 0; i < rewardList.length; i++) {
		var thisReward = rewardList[i];
		if (thisReward.unlock === unlockValue) {
			return thisReward;
		}
	}
}

var createAsciiHtml = function (ascii){
	var html = "";
	for (var i = 0; i < ascii.length; i++) {
		html += ascii[i];
		if (i === (ascii.length - 1)) {
			return html;
		}
		html += "<br>";
	}
};

var showReward = function (type, reward) {
	var html = "<div class='reward'><h2>You won a new " + type + "!</h2>";
	html += "<p>" + reward.name + "</p>";
	html += "<pre>" + createAsciiHtml(reward.ascii) + "</pre>";
	html += "<button class='accept-reward'>Accept</button>";
	html += "</div>";
	
	$("body").append(html).find(".accept-reward").on("click", function(){
		$(".reward").remove();
		drawMap.draw(levels, utils.getUnlockCode());
	});
};

reward.createAndShow = function(unlockObject){
	var randomNum = Math.random();
	
	if (randomNum < 0.25) {
		unlockObject.body += 1;
		showReward("body", findReward(data.bodies, unlockObject.body));
	} else if (randomNum < 0.5) {
		unlockObject.armor += 1;
		showReward("armor", findReward(data.armors, unlockObject.armor));
	} else if (randomNum < 0.75) {
		unlockObject.weapon += 1;
		showReward("weapon", findReward(data.weapons, unlockObject.weapon));
	} else {
		unlockObject.item += 1;
		showReward("item", findReward(data.items, unlockObject.item));
	}
	
	var newUnlockCode = utils.createAndReturnUnlockCode(unlockObject);
	utils.setUnlockCode(newUnlockCode);
};