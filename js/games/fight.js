var $ = require("jquery");

var determineAttackOrder = function(team, enemy){
	//assign each a random number based on speed, then sort
};

var showAttackOrder = function(attackOrder){
	
};

var attack = function(attackOrder){
	
};

var fight = function(team, enemy, callback){
	var attackOrder = determineAttackOrder(team, enemy);
	showAttackOrder(attackOrder);
	
	attack(attackOrder); // listens for attack choices in order
	
	if (false){ // enemies or team are exterminated
		callback();
	} else {
		fight(callback);
	}
};

module.exports = fight;