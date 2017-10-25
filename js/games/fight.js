var $ = require("jquery");
var showTeams = require("./showTeams.js");
var draft = require("./draft.js");
var data = require("./data.js");


var performAttack = function(attackObject, targetArray, gameObject){
	gameObject.attacker += 1;
	
	var first = function(){
		for (var i = 0; i < targetArray.length; i++){
			var thisUnit = targetArray[i];
			var attackValue = Math.round(thisUnit.armor.dampen * attackObject.attack.power); // dampen
			thisUnit.body.health -= attackValue;
			attackObject.attacker.body.health += Math.round(attackObject.attacker.armor.scrap * attackValue); // scrap
		}
		showTeams(gameObject);
	};
	var second = function(){
		if (attackObject.target.id[0] === "r"){
			alert("Enemy attacks " + attackObject.target.name + " for " + attackObject.attack.power + " damage!");
		}
		listenForAttacks(gameObject);
	};
	$.when(
		first()
	).then(
		setTimeout(second, 900)
	);
};

var createTargetArray = function(attackObject, gameObject){
	$(".attacking").removeClass("attacking");
	
	var targetArray = [];
	if (attackObject.attack.spread === 0) {
		performAttack(attackObject, [attackObject.target], gameObject);
	} else { // attack has spread
		var indexFinder = function(thisTarget){
			return thisTarget.id === attackObject.target.id;
		};
		if (attackObject.target.id[0] === "r") { // target is friendly
			var targetIndex = gameObject.battlefield.myTeam.findIndex(indexFinder);
			var startIndex = (targetIndex - attackObject.attack.spread) < 0 ? 0 : (targetIndex - attackObject.attack.spread);
			var endIndex = targetIndex + attackObject.attack.spread + 1;
			if (endIndex >= (gameObject.battlefield.myTeam.length)) { // attack hits last robot on team
				var targetArray = gameObject.battlefield.myTeam.slice(startIndex);
				performAttack(attackObject, targetArray, gameObject);
			} else {
				var targetArray = gameObject.battlefield.myTeam.slice(startIndex, endIndex);
				performAttack(attackObject, targetArray, gameObject); 
			}
		} else { // target is an enemy
			var targetIndex = gameObject.battlefield.enemyTeam.findIndex(indexFinder);
			var startIndex = (targetIndex - attackObject.attack.spread) < 0 ? 0 : (targetIndex - attackObject.attack.spread);
			var endIndex = targetIndex + attackObject.attack.spread + 1;
			if (endIndex >= (gameObject.battlefield.enemyTeam.length)) { // attack hits last enemy
				var targetArray = gameObject.battlefield.enemyTeam.slice(startIndex);
				performAttack(attackObject, targetArray, gameObject);
			} else {
				var targetArray = gameObject.battlefield.enemyTeam.slice(startIndex, endIndex);
				performAttack(attackObject, targetArray, gameObject); 
			}
		}
	}
};

listenForTarget = function(attackObject, gameObject){
	if (gameObject.battlefield.enemyTeam.length === 1) { // only one legal target
		attackObject.target = gameObject.battlefield.enemyTeam[0];
		createTargetArray(attackObject, gameObject);
	} else { // multiple legal targets
		// make cursor a crosshair and highlight possible targets
		$("body").css("cursor", "crosshair");
		$(".enemy").addClass("legal-target").on("click", function(){
			$("body").css("cursor", "auto");
			$(".enemy").removeClass("legal-target").unbind();
			var enemyIndex = parseInt(this.id[1]);
			
			attackObject.target = gameObject.battlefield.enemyTeam[enemyIndex];
			createTargetArray(attackObject, gameObject);
		});
	}
};

var showAttackChoices = function(unit, gameObject){
	attackObject = {attacker: unit};
	if (unit.id[0] === "r") { // it's a friendly robot
		var attackOptions = [{name: "Punch", id: "1", power: 2, spread: 0}, {name: unit.weapon.name, id: "2", power: unit.weapon.power, spread: unit.weapon.spread}];
		$("#" + unit.id).append('<div id="attack-options"></div>')
		for (var i = 0; i < attackOptions.length; i++) {
			var attack = attackOptions[i];
			var html = '<div id="' + attack.id + '" class="attack-option">' + attack.name + '</div>';
			$("#attack-options").append(html).find("#" + attack.id).on("click", {attack: attack}, function(event){
				// remove both elements and attack
				var callback = function(){
					attackObject.attack = event.data.attack;
					listenForTarget(attackObject, gameObject);
				};
				$.when(
					$("#attack-options").remove()
				).then(
					setTimeout(callback, 100)
				);
			});
		}
	} else { // it's an enemy
		var attack = {name: "Enemy Attacks", power: unit.weapon.power, spread: unit.weapon.spread};
		// determine target
		var targetIndex = Math.floor(gameObject.battlefield.myTeam.length * Math.random());
		
		attackObject.attack = attack;
		attackObject.target = gameObject.battlefield.myTeam[targetIndex];
		createTargetArray(attackObject, gameObject);
	}
};

var teamIsDead = function(team){
	var teamSurvives = false;
	for (var i = 0; i < team.length; i++) {
		var thisUnit = team[i];
		if (thisUnit.body.health > 0) {
			teamSurvives = true;
			return !teamSurvives;
		}
	}
	return !teamSurvives;
};

var listenForAttacks = function(gameObject){
	
	if (teamIsDead(gameObject.battlefield.enemyTeam)) { // enemies are dead
		// move to next enemy
		gameObject.enemyNum += 1;
		gameObject.challenges(gameObject.battlefield.myTeam, gameObject.enemyNum, gameObject.round);
	} else if (teamIsDead(gameObject.battlefield.myTeam)) { // my team is dead
		// draft again
		draft(data.availableChoices);
	} else { // battle is still raging
		if(gameObject.attacker < gameObject.attackOrder.length){
			var thisUnit = gameObject.attackOrder[gameObject.attacker];
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
	gameObject.attackOrder = gameObject.attackOrder ? gameObject.attackOrder : gameObject.battlefield.myTeam.concat(gameObject.battlefield.enemyTeam);
	for(var i = 0; i < gameObject.attackOrder.length; i++){
		var thisUnit = gameObject.attackOrder[i];
		thisUnit.roundSpeed = (Math.pow(thisUnit.body.speed, 2) * Math.random());
		if(i === (gameObject.attackOrder.length - 1)){
			orderAttackers(gameObject);
		}
	}
};

var fight = function(gameObject){
	createAttackOrderArray(gameObject);
};

module.exports = fight;