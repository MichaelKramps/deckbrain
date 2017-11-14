var itemActions = {};

module.exports = itemActions;

itemActions.sandwiches = function(targetArray, callback){
	var target = targetArray[0];
	if ((target.body.health + 10) > target.body.maxHealth) {
		target.body.health = target.body.maxHealth
	} else {
		target.body.health += 10;
	}
	callback();
};

itemActions.springs = function(targetArray, callback){
	targetArray[0].body.speed += 1;
	callback();
};

itemActions.nets = function(targetArray, callback){
	targetArray[0].weapon.power -= 1;
	callback();
};

itemActions.jackets = function(targetArray, callback){
	targetArray[0].armor.dampen -= 0.1;
	callback();
};

itemActions.smellingSalts = function(targetArray, callback){
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

itemActions.chemicals = function(targetArray, callback){
	targetArray[0].armor.dampen += 0.1;
	callback();
};