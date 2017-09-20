var challenges = {};

module.exports = challenges;

var $ = require("jquery");

var returnHealthHtml = function(robot){
	var html = '<div class="robot-health">Health: ';
	html += robot.body.health;
	html += '</div>';
	
	return html;
};

var returnSpeedHtml = function(robot){
	var html = '<div class="robot-speed">Speed: ';
	html += robot.body.speed;
	html += '</div>';
	
	return html;
};

var returnDampenHtml = function(robot){
	var html = '<div class="robot-dampen">Dampen: ';
	html += robot.armor.dampen;
	html += '</div>';
	
	return html;
};

var returnScrapHtml = function(robot){
	var html = '<div class="robot-scrap">Scrap: ';
	html += robot.armor.scrap;
	html += '</div>';
	
	return html;
};

var returnSpreadHtml = function(robot){
	var html = '<div class="robot-spread">Spread: ';
	html += robot.weapon.spread;
	html += '</div>';
	
	return html;
};

var returnPowerHtml = function(robot){
	var html = '<div class="robot-power">Power: ';
	html += robot.weapon.power;
	html += '</div>';
	
	return html;
};

challenges.showTeam = function(team){ // build the html that shows team and stats
	var html = "";
	for (var i = 0; i < team.length; i++){
		var robotHtml = '<div class="robot">';
		var thisRobot = team[i];
		robotHtml += returnHealthHtml(thisRobot);
		robotHtml += returnSpeedHtml(thisRobot);
		robotHtml += returnDampenHtml(thisRobot);
		robotHtml += returnScrapHtml(thisRobot);
		robotHtml += returnSpreadHtml(thisRobot);
		robotHtml += returnPowerHtml(thisRobot);
		robotHtml += '</div>';
		html += robotHtml;
	}
	console.log(html);
}