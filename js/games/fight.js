var $ = require("jquery");

var showAttackChoices = function(unit){
	if (unit.id[0] === "r") { // it's a friendly robot
		var attackOptions = [{name: "Punch", id: "1", power: 6, spread: 0}, {name: unit.weapon.name, id: "2", power: unit.weapon.power, spread: unit.weapon.spread}];
		for (var i = 0; i < attackOptions.length; i++) {
			var attack = attackOptions[i];
			var html = '<div id="' + attack.id + '" class="attack-option">' + attack.name + '</div>';
			$("#" + unit.id).append(html).find("#" + attack.id).on("click", function(){
				// remove both
				$("#1, #2").remove();
				
				// perform attack
			});
		}
	} else { // it's an enemy
		console.log("enemy");
	}
};

var listenForAttacks = function(attackOrderObject, finalCallbackObject){
	if(attackOrderObject.attacker < attackOrderObject.attackOrderArray.length){
		var thisUnit = attackOrderObject.attackOrderArray[attackOrderObject.attacker];
		// Highlight in order list
		$(".attacker-name").eq(attackOrderObject.attacker).addClass("attacking");
		// Highlight character on battlefield
		$("#" + thisUnit.id).addClass("attacking");
		// Show attack Choices
		showAttackChoices(thisUnit);
		// Listen for attack choice
		
		// Perform attack action
		
		// callback
	} else {
		// fight() another round of attacks
	}
	
};

var showAttackOrder = function(attackOrder, finalCallbackObject){
	console.log(attackOrder);
	$(".attack-order").empty();
	for(var i = 0; i < attackOrder.length; i++){
		var thisUnit = attackOrder[i];
		var html = '<div class="attacker-name">' + thisUnit.name + '</div>';
		$(".attack-order").append(html);
		if (i === (attackOrder.length - 1)) { // if it's the last attacker
			listenForAttacks({attackOrderArray: attackOrder, attacker: 0}, finalCallbackObject);
		}
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