var $ = require("jquery");
var data = require("./data.js");
var ascii = require("./ascii.js");
var utils = require("./utils.js");
var challenges = require("./challenges.js");
var showMyTeam = require("./showMyTeam.js");
	
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

var filterLockedCards = function(choice){
	var cardUnlockCode;
	var unlockedCards = choice.cards.slice();
	
	switch (choice.code) {
		case "body":
			cardUnlockCode = utils.bodyCode();
			break;
		case "armor":
			cardUnlockCode = utils.armorCode();
			break;
		case "weapon":
			cardUnlockCode = utils.weaponCode();
			break;
		case "item":
			cardUnlockCode = utils.itemCode();
			break;
	}
	
	return unlockedCards.filter(function(card){
		return card.unlock <= cardUnlockCode;
	});
};

var assignStatsBasedOnPick = function (choices, choiceNumber) {
	switch (choices.partNum) {
		case 1:
			choices.thisRobot.body = $.extend({}, data.bodies[choiceNumber]);
			choices.thisRobot.body.health = Math.round(choices.thisRobot.body.health/choices.numRobots) === 0 ? 1 : Math.round(choices.thisRobot.body.health/choices.numRobots);
			choices.thisRobot.body.maxHealth = Math.round(choices.thisRobot.body.maxHealth/choices.numRobots) === 0 ? 1 : Math.round(choices.thisRobot.body.maxHealth/choices.numRobots);
			break;
		case 2:
			choices.thisRobot.armor = $.extend({}, data.armors[choiceNumber]);
			break;
		case 3:
			choices.thisRobot.weapon = $.extend({}, data.weapons[choiceNumber]);
			choices.thisRobot.weapon.power = Math.round(choices.thisRobot.weapon.power/choices.numRobots) === 0 ? 1 : Math.round(choices.thisRobot.weapon.power/choices.numRobots);
			break;
		case 4:
			choices.thisRobot.item = $.extend({}, data.items[choiceNumber]);
			break;
	}
};

var pickPart = function(choices, robotNum){
	clearPreviousDraftPick();
	var thisPart = choices.draftChoices[choices.partNum];
	$("#title").append(thisPart.title);
	showMyTeam.showDraft(choices.thisRobot, choices.robots);
	
	var cardsArray = filterLockedCards(thisPart);
	for (var i = 0; i < cardsArray.length; i++){
		var thisCard = cardsArray[i];
		$("#cards").append(returnCardHTML(thisCard, i)).find("#" + i).on("click", function(){
			var choiceNumber = parseInt($(this).attr("id"));
			assignStatsBasedOnPick(choices, choiceNumber);
			choices.partNum += 1;
			draftThisRobot(choices, robotNum);
		});
	}
};

var draftThisRobot = function(choices, robotNum){
	var blankRobot = {
		body: {ascii: $.extend({}, ascii.bodies.blank)},
		armor: {ascii: $.extend({}, ascii.armors.blank)},
		weapon: {ascii: $.extend({}, ascii.weapons.blank)},
		item: {ascii: $.extend({}, ascii.items.blank)}
	}
	
	
    if (choices.partNum){ // we've already made a pick
		if (choices.partNum === data.availableChoices.draftChoices.length){ // we're finished picking for this robot
			choices.partNum = 1;
			choices.thisRobot.id = "r" + robotNum;
			choices.thisRobot.name = data.robotNames[Math.floor(Math.random() * data.robotNames.length)];
			choices.robots[robotNum - 1] = $.extend({}, choices.thisRobot);
			choices.thisRobot = $.extend({}, blankRobot); // reset the robot
			draft(choices, (robotNum + 1));
		} else {
			pickPart(choices, robotNum);
		}
	} else {
		choices.partNum = 1;

		choices.thisRobot = $.extend({}, blankRobot);
		pickPart(choices, robotNum);
	}
};

var howManyRobots = function(choices){
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