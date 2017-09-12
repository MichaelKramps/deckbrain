$(document).ready(function(){
	
	var clearPreviousCards = function(){
		$("#title").empty();
		$("#cards").children().each(function(){
			$(this).empty();
		});
	};
	
	var returnCardHTML = function(card){
		var html = "<h3>" + card.name + "</h3>";
		if (card.description){
			html += ("<p>" + card.description + "</p>")
		}
		return html;
	};
	
	var populateNewCards = function(choices, round){
		var cardsObject = choices[round];
		$("#title").append(cardsObject.title);
		
		var cardsArray = cardsObject.cards;
		for (var i = 1; i < cardsArray.length + 1; i++){
			var thisCard = cardsArray[i - 1];
			$("#" + i).append(returnCardHTML(thisCard));
		}
	};
	
	var listenForCardSelection = function(round){
		$("#cards").children().unbind();
		$("#cards").children().on("click", function(){
			var choiceNumber = parseInt($(this).attr("id"));
			choicesMade[round] = choiceNumber;
			draft(availableChoices, round + 1);
		});
	};
	
	var draft = function(choices, round = 0){
		if (round === choices.length) {return;}
		
		clearPreviousCards();
		populateNewCards(choices, round);
		listenForCardSelection(round);
	}
	
	
	
	draft(availableChoices);
})