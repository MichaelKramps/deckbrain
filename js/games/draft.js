var $ = require("jquery");
var data = require("./data.js");
var challenges = require("./challenges.js");
var choicesMade = [];
	
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

var populateNewDraftPick = function(choices, round){
	var cardsObject = choices[round];
	$("#title").append(cardsObject.title);
	
	var cardsArray = cardsObject.cards;
	for (var i = 1; i < cardsArray.length + 1; i++){
		var thisCard = cardsArray[i - 1];
		$("#cards").append(returnCardHTML(thisCard, i));
	}
};

var listenForCardSelection = function(round){
	$("#cards").children().unbind();
	$("#cards").children().on("click", function(){
		var choiceNumber = parseInt($(this).attr("id"));
		choicesMade[round] = choiceNumber;
		draft(data.availableChoices, round + 1);
	});
};

var createAndReturnRobot = function(){
	var thisRobot = {};
	thisRobot.body = data.bodies[choicesMade[1] - 1];
	thisRobot.armor = data.armors[choicesMade[2] - 1];
	thisRobot.weapon = data.weapons[choicesMade[3] - 1];
	
	return thisRobot;
};

var createAndReturnTeam = function(){
	var army = [];
	var numberOfRobots = choicesMade[0];
	for (var i = 0; i < numberOfRobots; i++){
		army[i] = createAndReturnRobot();
	}
	return army;
};

///////////////////////////////////////////
// Starting point for the draft function //
///////////////////////////////////////////
var draft = function(choices, round = 0){
	if (round === choices.length) {
		clearPreviousDraftPick();
		var team = createAndReturnTeam();
		challenges(team);
	}
	
	clearPreviousDraftPick();
	populateNewDraftPick(choices, round);
	listenForCardSelection(round);
};

module.exports = draft;