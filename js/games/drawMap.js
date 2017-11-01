var drawMap = {};

module.exports = drawMap;

var $ = require("jquery");
var draft = require("./draft.js");
var data = require("./data.js");
var utils = require("./utils.js");

var clearScreen = function(){
	$(".enemy-dashboard").empty();
	$(".my-dashboard").empty();
	$("#title").empty();
	$("#cards").empty();
};

drawMap.draw = function(levels, unlockCode){
	clearScreen();
	
	var currentUnlockCode = utils.getUnlockCode();
	if (currentUnlockCode >= unlockCode){ // we already have a better unlock code
		unlockCode = currentUnlockCode;
	} else { // we just got a better unlock code
		utils.setUnlockCode(unlockCode);
	}
	
	$("#title").append("Unlocked Levels");
	console.log(unlockCode);
	
	for (var i = 0; i < unlockCode; i++) {
		var thisLevel = levels[i];
		console.log(thisLevel);
		$("#cards").append("<div id='l" + i + "'>" + thisLevel.name + "</div>").find("#l" + i).on("click", function(){
			var id = $(this).attr("id");
			var num = id[1];
			utils.setLevel(num);
			draft(data.availableChoices); // need to update to be level specific
		});
	}
};