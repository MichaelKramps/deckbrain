var $ = require("jquery");
var draft = require("./draft.js");
var data = require("./data.js");

var clearScreen = function(){
	$(".enemy-dashboard").empty();
	$(".my-dashboard").empty();
	$("#title").empty();
	$("#cards").empty();
};

var drawMap = function(levels = false, progress = false){
	clearScreen();
	
	//draft(data.availableChoices);
};

module.exports = drawMap;