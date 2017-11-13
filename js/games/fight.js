var $ = require("jquery");
var showMyTeam = require("./showMyTeam.js");
var showEnemyTeam = require("./showEnemyTeam.js");
var draft = require("./draft.js");
var data = require("./data.js");
var levels = require("./levels.js");
var drawMap = require("./drawMap.js");
var utils = require("./utils.js");


var performAttack = function(attackObject, targetArray, gameObject){
	gameObject.attacker += 1;
	var attacksArray = [];
	
	var first = function(){
		for (var i = 0; i < targetArray.length; i++){
			var thisUnit = targetArray[i];
			var attackValue = Math.round(thisUnit.armor.dampen * attackObject.weapon.power); // dampen
			thisUnit.body.health = (thisUnit.body.health - attackValue) < 0 ? 0 : (thisUnit.body.health - attackValue);
			attackObject.attacker.body.health += Math.round(attackObject.attacker.armor.scrap * attackValue); // scrap
			
			attacksArray[i] = {id: thisUnit.id, attackValue: attackValue};
		}
		if (targetArray[0].id[0] === "r") {
			showMyTeam.show(gameObject.battlefield.myTeam);
		} else {
			showEnemyTeam(gameObject.battlefield.enemyTeam);
		}
	};
	var second = function(){
		for (var i = 0; i < attacksArray.length; i++) {
			var thisUnit = attacksArray[i];
			console.log(thisUnit);
			if (thisUnit.id[0] === "r") {
				$("#" + thisUnit.id + " .robot-health").append("<span class='damage-dealt'> -" + thisUnit.attackValue + "</span>").find(".damage-dealt").fadeOut(3000);
			} else {
				console.log("here");
				$("#" + thisUnit.id + " .enemy-health").append("<span class='damage-dealt'> -" + thisUnit.attackValue + "</span>").find(".damage-dealt").fadeOut(3000);
			}
		}
		listenForAttacks(gameObject)
	};
	$.when(
		first()
	).then(
		second()
	);
};

var createTargetArray = function(attackObject, gameObject){
	$(".attacking").removeClass("attacking");
	
	var targetArray = [];
	
	if (attackObject.item) {
		if (attackObject.item.spread) {
			
		} else {
			gameObject.attacker += 1;
			var callback = function(){listenForAttacks(gameObject)};
			attackObject.item.action([attackObject.target], callback);
		}
	} else {
		if (attackObject.weapon.spread === 0) {
			performAttack(attackObject, [attackObject.target], gameObject);
		} else { // attack has spread
			var indexFinder = function(thisTarget){
				return thisTarget.id === attackObject.target.id;
			};
			if (attackObject.target.id[0] === "r") { // target is friendly
				var targetIndex = gameObject.battlefield.myTeam.findIndex(indexFinder);
				var startIndex = (targetIndex - attackObject.weapon.spread) < 0 ? 0 : (targetIndex - attackObject.weapon.spread);
				var endIndex = targetIndex + attackObject.weapon.spread + 1;
				if (endIndex >= (gameObject.battlefield.myTeam.length)) { // attack hits last robot on team
					var targetArray = gameObject.battlefield.myTeam.slice(startIndex);
					performAttack(attackObject, targetArray, gameObject);
				} else {
					var targetArray = gameObject.battlefield.myTeam.slice(startIndex, endIndex);
					performAttack(attackObject, targetArray, gameObject); 
				}
			} else { // target is an enemy
				var targetIndex = gameObject.battlefield.enemyTeam.findIndex(indexFinder);
				var startIndex = (targetIndex - attackObject.weapon.spread) < 0 ? 0 : (targetIndex - attackObject.weapon.spread);
				var endIndex = targetIndex + attackObject.weapon.spread + 1;
				if (endIndex >= (gameObject.battlefield.enemyTeam.length)) { // attack hits last enemy
					var targetArray = gameObject.battlefield.enemyTeam.slice(startIndex);
					performAttack(attackObject, targetArray, gameObject);
				} else {
					var targetArray = gameObject.battlefield.enemyTeam.slice(startIndex, endIndex);
					performAttack(attackObject, targetArray, gameObject); 
				}
			}
		}
	}
};

var listenForEnemyTargets = function(attackObject, gameObject){
	if (gameObject.battlefield.enemyTeam.length === 1) { // only one legal target
		attackObject.target = gameObject.battlefield.enemyTeam[0];
		createTargetArray(attackObject, gameObject);
	} else { // multiple legal targets
		// make cursor a crosshair and highlight possible targets
		$("body").css("cursor", "crosshair");
		$(".enemy").addClass("legal-target").on("click", function(){
			$("body").css("cursor", "auto");
			$(".enemy").removeClass("legal-target").unbind();
			var targetIndex = parseInt(this.id[1]);
			
			attackObject.target = gameObject.battlefield.enemyTeam[targetIndex];
			createTargetArray(attackObject, gameObject);
		});
	}
};

var listenForFriendlyTargets = function(actionObject, gameObject){
	if (gameObject.battlefield.myTeam.length === 1) { // only one legal target
		actionObject.target = gameObject.battlefield.myTeam[0];
		createTargetArray(actionObject, gameObject);
	} else { // multiple legal targets
		// make cursor a crosshair and highlight possible targets
		$("body").css("cursor", "crosshair");
		$(".robot").addClass("legal-friendly-target").on("click", function(){
			$("body").css("cursor", "auto");
			$(".robot").removeClass("legal-friendly-target").unbind();
			var targetIndex = parseInt(this.id[1]) - 1;
			
			actionObject.target = gameObject.battlefield.myTeam[targetIndex];
			createTargetArray(actionObject, gameObject);
		});
	}
};

var determineLegalTargets = function(actionObject, gameObject){
	switch(actionObject.item.targets){
		case "enemies":
			listenForEnemyTargets(actionObject, gameObject);
			break;
		case "friendlies":
			listenForFriendlyTargets(actionObject, gameObject);
			break;
		case "all":
			listeForAnyTarget(actionObject, gameObject);
			break;
	}
}

var showAttackChoices = function(unit, gameObject){
	attackObject = {attacker: unit};
	if (unit.id[0] === "r") { // it's a friendly robot
		
		$("#" + unit.id).append('<div id="attack-options"></div>');
				
		var weaponAttackHtml = '<div id="weapon" class="attack-option">' + unit.weapon.name + '</div>';
		$("#attack-options").append(weaponAttackHtml).find("#weapon").on("click", function(){
			// remove both elements and attack
			var callback = function(){
				attackObject.weapon = unit.weapon;
				listenForEnemyTargets(attackObject, gameObject);
			};
			$.when(
				$("#attack-options").remove()
			).then(
				setTimeout(callback, 100)
			);
		});
		
		var itemActionHtml = '<div id="item" class="attack-option">' + unit.item.name + '</div>';
		$("#attack-options").append(itemActionHtml).find("#item").on("click", function(){
			// remove both elements and attack
			var callback = function(){
				attackObject.item = unit.item;
				determineLegalTargets(attackObject, gameObject);
			};
			$.when(
				$("#attack-options").remove()
			).then(
				setTimeout(callback, 100)
			);
		});
		
		
	} else { // it's an enemy
		var targetIndex = Math.floor(gameObject.battlefield.myTeam.length * Math.random());
		
		attackObject.weapon = unit.weapon;
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
		$(".attack-order").empty();
		// move to next enemy
		gameObject.enemyNum += 1;
		gameObject.challenges(gameObject.battlefield.myTeam, gameObject.enemyNum, gameObject.round);
	} else if (teamIsDead(gameObject.battlefield.myTeam)) { // my team is dead
		// draft again
		$(".attack-order").empty();
		drawMap.draw(levels, utils.getUnlockCode());
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

var filterAttackArray = function(unitArray){
	var filteredArray = unitArray.filter(function(unit){
		return unit.body.health > 0;
	})
	return filteredArray;
};

var createAttackOrderArray = function(gameObject){
	gameObject.attackOrder = gameObject.attackOrder ? filterAttackArray(gameObject.attackOrder) : filterAttackArray(gameObject.battlefield.myTeam.concat(gameObject.battlefield.enemyTeam));
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