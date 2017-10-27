var $ = require("jquery");
var draft = require("./draft.js");
var data = require("./data.js");

var clearScreen = function(){
	$(".enemy-dashboard").empty();
	$(".my-dashboard").empty();
	$("#title").empty();
	$("#cards").empty();
};

var drawMap = function(levels, unlockCode){
	clearScreen();
	
	$("#title").append("Unlocked Levels");
	
	for (var i = 0; i < unlockCode; i++) {
		var thisLevel = levels[i];
		$("#cards").append("<div id='l" + i + "'>" + thisLevel.name + "</div>").find("#l" + i).on("click", function(){
			draft(data.availableChoices); // need to update to be level specific
		});
	}
};

module.exports = drawMap;