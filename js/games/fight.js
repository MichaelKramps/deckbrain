var $ = require("jquery");

var listenForAttacks = function(attackOrderObject, finalCallbackObject){
	// Highlight in order list
	
	// Highlight character on battlefield
	
	// Show attack Choices
	
	// Listen for attack choice
	
	// Perform attack action
	
	// callback
};

var showAttackOrder = function(attackOrder, finalCallbackObject){
	console.log(attackOrder);
	$(".attack-order").empty();
	for(var i = 0; i < attackOrder.length; i++){
		var thisUnit = attackOrder[i];
		var html = '<div class="attacker-name">' + thisUnit.name + '</div>';
		$(".attack-order").append(html);
		listenForAttacks({attackOrderArray: attackOrder, attacker: 0}, finalCallbackObject);
	}
};

var orderAttackers = function(attackOrderArray, finalCallbackObject){
	showAttackOrder(
		attackOrderArray.sort(function(a, b){
			return (b.roundSpeed - a.roundSpeed);
		})
		,finalCallbackObject
	);
};

var createAttackOrderArray = function(team, enemyTeam, finalCallbackObject){
	var attackOrderArray = team.concat(enemyTeam);
	for(var i = 0; i < attackOrderArray.length; i++){
		var thisUnit = attackOrderArray[i];
		var thisSpeed = thisUnit.speed ? thisUnit.speed : thisUnit.body.speed;
		thisUnit.roundSpeed = (Math.pow(thisSpeed, 2) * Math.random());
		if(i === (attackOrderArray.length - 1)){
			orderAttackers(attackOrderArray, finalCallbackObject);
		}
	}
};

var fight = function(team, enemyTeam, finalCallbackObject){
	createAttackOrderArray(team, enemyTeam, finalCallbackObject);
};

module.exports = fight;