var itemActions = {};

module.exports = itemActions;

var $ = require("jquery");
var showMyTeam = require("./showMyTeam.js");

itemActions.sandwiches = function(gameObject, targetArray, callback){
	var target = targetArray[0];
	
	var first = function(){
		if ((target.body.health + 10) > target.body.maxHealth) {
			target.body.health = target.body.maxHealth
		} else {
			target.body.health += 10;
		}
		showMyTeam.show(gameObject.battlefield.myTeam);
	};
	
	var second = function(){
		$("#" + target.id + " .robot-health")
		.append("<span class='amount-healed'> +10</span>")
		.find(".amount-healed")
		.fadeOut(1500, function(){
			callback();
		});
	}
	
	$.when(
		first()
	).then(
		second()
	);
};

itemActions.springs = function(gameObject, targetArray, callback){
	targetArray[0].body.speed += 1;
	callback();
};

itemActions.nets = function(gameObject, targetArray, callback){
	targetArray[0].weapon.power -= 1;
	callback();
};

itemActions.jackets = function(gameObject, targetArray, callback){
	targetArray[0].armor.dampen -= 0.1;
	callback();
};

itemActions.smellingSalts = function(gameObject, targetArray, callback){
	if (targetArray[0].body.health < 1) {
		var revive = Math.random();
		if (revive > 0.5) {
			targetArray[0].body.health = 25;
			callback();
		} else { // failed to revive
			callback();
		}
	} else {
		callback();
	}
};

itemActions.chemicals = function(gameObject, targetArray, callback){
	targetArray[0].armor.dampen += 0.1;
	callback();
};