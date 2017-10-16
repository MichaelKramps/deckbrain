var $ = require("jquery");
var showTeam = require("./showTeam.js");
var showEnemy = require("./showEnemy.js");

var performAttack = function(attack, target, attackOrderObject, battlefield, finalCallbackObject){
	console.log(attack);
	attackOrderObject.attacker += 1;
	
	if (target.id[0] === "e") { // target is an enemy
		target.health -= attack.power;
		showEnemy(battlefield.enemyTeam);
		listenForAttacks(attackOrderObject, battlefield, finalCallbackObject);
	} else { // target is a friendly robot
		target.body.health -= attack.power;
		showTeam(battlefield.team);
		listenForAttacks(attackOrderObject, battlefield, finalCallbackObject);
	}
};

var showAttackChoices = function(unit, attackOrderObject, battlefield, finalCallbackObject){
	if (unit.id[0] === "r") { // it's a friendly robot
		var attackOptions = [{name: "Punch", id: "1", power: 6, spread: 0}, {name: unit.weapon.name, id: "2", power: unit.weapon.power, spread: unit.weapon.spread}];
		for (var i = 0; i < attackOptions.length; i++) {
			var attack = attackOptions[i];
			var html = '<div id="' + attack.id + '" class="attack-option">' + attack.name + '</div>';
			$("#" + unit.id).append(html).find("#" + attack.id).on("click", {attack: attack}, function(event){
				// remove both
				$("#1, #2").remove(); // ***** magic numbers
				
				// perform attack
				performAttack(event.data.attack, battlefield.enemyTeam[0], attackOrderObject, battlefield, finalCallbackObject);
			});
		}
	} else { // it's an enemy
		console.log("enemy attack");
	}
};

var listenForAttacks = function(attackOrderObject, battlefield, finalCallbackObject){
	if(attackOrderObject.attacker < attackOrderObject.attackOrderArray.length){
		var thisUnit = attackOrderObject.attackOrderArray[attackOrderObject.attacker];
		// Remove old highlight then highlight new attacker
		$(".attacking").removeClass("attacking");
		$(".attacker-name").eq(attackOrderObject.attacker).addClass("attacking");
		// Highlight character on battlefield
		$("#" + thisUnit.id).addClass("attacking");
		// Show attack Choices
		showAttackChoices(thisUnit, attackOrderObject, battlefield, finalCallbackObject);
	} else {
		console.log("last attacker");
		// fight() another round of attacks
	}
	
};

var showAttackOrder = function(attackOrderArray, battlefield, finalCallbackObject){
	$(".attack-order").empty();
	for(var i = 0; i < attackOrderArray.length; i++){
		var thisUnit = attackOrderArray[i];
		var html = '<div class="attacker-name">' + thisUnit.name + '</div>';
		$(".attack-order").append(html);
		if (i === (attackOrderArray.length - 1)) { // if it's the last attacker
			listenForAttacks({attackOrderArray: attackOrderArray, attacker: 0}, battlefield, finalCallbackObject);
		}
	}
};

var orderAttackers = function(attackOrderArray, battlefield, finalCallbackObject){
	showAttackOrder(
		attackOrderArray.sort(function(a, b){
			return (b.roundSpeed - a.roundSpeed);
		})
		,battlefield
		,finalCallbackObject
	);
};

var createAttackOrderArray = function(battlefield, finalCallbackObject){
	var attackOrderArray = battlefield.team.concat(battlefield.enemyTeam);
	for(var i = 0; i < attackOrderArray.length; i++){
		var thisUnit = attackOrderArray[i];
		var thisSpeed = thisUnit.speed ? thisUnit.speed : thisUnit.body.speed;
		thisUnit.roundSpeed = (Math.pow(thisSpeed, 2) * Math.random());
		if(i === (attackOrderArray.length - 1)){
			orderAttackers(attackOrderArray, battlefield, finalCallbackObject);
		}
	}
};

var fight = function(battlefield, finalCallbackObject){
	createAttackOrderArray(battlefield, finalCallbackObject);
};

module.exports = fight;