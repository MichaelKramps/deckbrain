var $ = require("jquery");
var showTeam = require("./showTeam.js");
var showEnemy = require("./showEnemy.js");
var draft = require("./draft.js");


var performAttack = function(attack, target, gameObject){
	gameObject.attacker += 1;
	
	if (target.id[0] === "e") { // target is an enemy
		target.health -= attack.power;
		showEnemy(gameObject.battlefield.enemyTeam);
		listenForAttacks(gameObject);
	} else { // target is a friendly robot
		target.body.health -= attack.power;
		var callback = function(){
			alert("Enemy attacks " + target.name + " for " + attack.power + " damage!");
			listenForAttacks(gameObject);
		};
		$.when(
			showTeam(gameObject.battlefield.team)
		).then(
			setTimeout(callback, 900)
		);
	}
};

var showAttackChoices = function(unit, gameObject){
	if (unit.id[0] === "r") { // it's a friendly robot
		var attackOptions = [{name: "Punch", id: "1", power: 2, spread: 0}, {name: unit.weapon.name, id: "2", power: unit.weapon.power, spread: unit.weapon.spread}];
		$("#" + unit.id).append('<div id="attack-options"></div>')
		for (var i = 0; i < attackOptions.length; i++) {
			var attack = attackOptions[i];
			var numTargets = ;
			var html = '<div id="' + attack.id + '" class="attack-option">' + attack.name + '</div>';
			$("#attack-options").append(html).find("#" + attack.id).on("click", {attack: attack}, function(event){
				// remove both elements and attack
				var callback = function(){
					performAttack(event.data.attack, gameObject.battlefield.enemyTeam[0], gameObject);
				};
				$.when(
					$("#attack-options").remove()
				).then(
					setTimeout(callback, 100)
				);
			});
		}
	} else { // it's an enemy
		var attack = {name: "Enemy Attacks", power: unit.power, spread: unit.spread};
		// determine target
		var targetIndex = Math.floor(gameObject.battlefield.team.length * Math.random());
		performAttack(attack, gameObject.battlefield.team[targetIndex], gameObject);
	}
};

var enemiesAreDead = function(enemyTeam){
	var enemySurvives = false;
	for (var i = 0; i < enemyTeam.length; i++) {
		var thisEnemy = enemyTeam[i];
		if (thisEnemy.health > 0) {
			enemySurvives = true;
			return !enemySurvives;
		}
	}
	return !enemySurvives;
};

var myTeamIsDead = function(myTeam){
	var teamSurvives = false;
	for (var i = 0; i < myTeam.length; i++) {
		var thisUnit = myTeam[i];
		if (thisUnit.body.health > 0) {
			teamSurvives = true;
			return !teamSurvives;
		}
	}
	return !teamSurvives;
};

var listenForAttacks = function(gameObject){
	
	if (enemiesAreDead(gameObject.battlefield.enemyTeam)) { // enemies are dead
		// move to next enemy
		gameObject.enemyNum += 1;
		gameObject.challenges(gameObject.battlefield.team, gameObject.enemyNum, gameObject.round);
	} else if (myTeamIsDead(gameObject.battlefield.team)) {
		// draft again
		draft(data.availableChoices);
	} else { // battle is still raging
		if(gameObject.attacker < gameObject.attackOrder.length){
			var thisUnit = gameObject.attackOrder[gameObject.attacker];
			// Remove old highlight then highlight new attacker
			$(".attacking").removeClass("attacking");
			$(".attacker-name").eq(gameObject.attacker).addClass("attacking");
			// Highlight character on battlefield
			$("#" + thisUnit.id).addClass("attacking");
			// Show attack Choices
			showAttackChoices(thisUnit, gameObject);
		} else {
			createAttackOrderArray(gameObject);
		}
	}
};

var showAttackOrder = function(gameObject){
	$(".attack-order").empty();
	for(var i = 0; i < gameObject.attackOrder.length; i++){
		var thisUnit = gameObject.attackOrder[i];
		var html = '<div class="attacker-name">' + thisUnit.name + '</div>';
		$(".attack-order").append(html);
		if (i === (gameObject.attackOrder.length - 1)) { // if it's the last attacker
			gameObject.attacker = 0;
			listenForAttacks(gameObject);
		}
	}
};

var orderAttackers = function(gameObject){
	if(gameObject.attackOrder.sort(function(a, b){
		return (b.roundSpeed - a.roundSpeed);
	})) {
		showAttackOrder(gameObject);
	}
};

var createAttackOrderArray = function(gameObject){
	gameObject.attackOrder = gameObject.attackOrder ? gameObject.attackOrder : gameObject.battlefield.team.concat(gameObject.battlefield.enemyTeam);
	for(var i = 0; i < gameObject.attackOrder.length; i++){
		var thisUnit = gameObject.attackOrder[i];
		var thisSpeed = thisUnit.speed ? thisUnit.speed : thisUnit.body.speed;
		thisUnit.roundSpeed = (Math.pow(thisSpeed, 2) * Math.random());
		if(i === (gameObject.attackOrder.length - 1)){
			orderAttackers(gameObject);
		}
	}
};

var fight = function(gameObject){
	createAttackOrderArray(gameObject);
};

module.exports = fight;