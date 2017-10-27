var $ = require("jquery");
var data = require("./data.js");
var challenges = require("./challenges.js");
	
var clearPreviousDraftPick = function(){
	$("#title").empty();
	$("#cards").empty();
};

var returnCardHTML = function(card, id){
	var html = "<div id='" + id + "'><h3>" + card.name + "</h3>";
	if (card.description){
		html += ("<p>" + card.description + "</p></div>")
	}
	return html;
};

var listenForAndReturnDraftPick = function(availabeChoices){
	
};

var pickPart = function(choices, robotNum){
	clearPreviousDraftPick();
	var thisPart = choices.draftChoices[choices.partNum];
	$("#title").append(thisPart.title);
	
	var cardsArray = thisPart.cards;
	for (var i = 0; i < cardsArray.length; i++){
		var thisCard = cardsArray[i];
		$("#cards").append(returnCardHTML(thisCard, i)).find("#" + i).on("click", function(){
			var choiceNumber = parseInt($(this).attr("id"));
			switch (choices.partNum) {
				case 1:
					choices.thisRobot.body = $.extend({}, data.bodies[choiceNumber]);
					choices.thisRobot.body.health = Math.round(choices.thisRobot.body.health/choices.numRobots) === 0 ? 1 : Math.round(choices.thisRobot.body.health/choices.numRobots);
					break;
				case 2:
					choices.thisRobot.armor = $.extend({}, data.armors[choiceNumber]);
					choices.thisRobot.armor.scrap = Math.round(choices.thisRobot.armor.scrap/choices.numRobots) === 0 ? 1 : Math.round(choices.thisRobot.armor.scrap/choices.numRobots);
					break;
				case 3:
					choices.thisRobot.weapon = $.extend({}, data.weapons[choiceNumber]);
					choices.thisRobot.weapon.power = Math.round(choices.thisRobot.weapon.power/choices.numRobots) === 0 ? 1 : Math.round(choices.thisRobot.weapon.power/choices.numRobots);
					break;
			}
			choices.partNum += 1;
			draftThisRobot(choices, robotNum);
		});
	}
};

var draftThisRobot = function(choices, robotNum){
    if (choices.partNum){ // we've already made a pick
		if (choices.partNum === data.availableChoices.draftChoices.length){ // we're finished picking for this robot
			choices.partNum = 1;
			choices.thisRobot.id = "r" + robotNum;
			choices.thisRobot.name = data.robotNames[Math.floor(Math.random() * data.robotNames.length)];
			choices.robots[robotNum - 1] = $.extend({}, choices.thisRobot);
			draft(choices, (robotNum + 1));
		} else {
			pickPart(choices, robotNum);
		}
	} else {
		choices.partNum = 1;
		choices.thisRobot = {};
		pickPart(choices, robotNum);
	}
};

var howManyRobots = function(choices){
	clearPreviousDraftPick();
	var thisChoice = choices.draftChoices[0];
	$("#title").append(thisChoice.title);
	
	var cardsArray = thisChoice.cards;
	for (var i = 1; i < cardsArray.length + 1; i++){
		var thisCard = cardsArray[i - 1];
		$("#cards").append(returnCardHTML(thisCard, i)).find("#" + i).on("click", function(){
			var choiceNumber = parseInt($(this).attr("id"));
			choices.numRobots = choiceNumber;
			draft(choices, 1);
		});
	}
};

///////////////////////////////////////////
// Starting point for the draft function //
///////////////////////////////////////////
var draft = function(choices, robotNum = 0){
	if (robotNum === 0) { // first pick
		clearPreviousDraftPick();
		choices.robots = [];
		howManyRobots(choices);
	} else if (robotNum === (choices.numRobots + 1)) { // done drafting
		clearPreviousDraftPick();
		challenges(choices.robots);
	} else {
		clearPreviousDraftPick();
		draftThisRobot(choices, robotNum);
	}
};

module.exports = draft;