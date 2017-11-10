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
	
	utils.updateUnlockCode(unlockCode);
	
	$("#title").append("Unlocked Levels");
	
	var levelCode = utils.levelCode(unlockCode);
	for (var i = 0; i < levelCode; i++) {
		var thisLevel = levels[i];
		$("#cards").append("<div id='l" + i + "'>" + thisLevel.name + "</div>").find("#l" + i).on("click", function(){
			var id = $(this).attr("id");
			var num = id[1];
			draft(data.availableChoices);
		});
	}
};