var showTeam = {};

module.exports = showTeam;

var $ = require("jquery");

var topTwoLines = function(robot){
	var topTwoHtml = "";
	topTwoHtml += robot.item.ascii[0];
	topTwoHtml += robot.armor.ascii[0];
	topTwoHtml += robot.weapon.ascii[0];
	topTwoHtml += "<br>";
	topTwoHtml += robot.item.ascii[1];
	topTwoHtml += robot.armor.ascii[1];
	topTwoHtml += robot.weapon.ascii[1];
	topTwoHtml += "<br>";
	
	return topTwoHtml;
};

var bottomFourLines = function(robot){
	bottomFourHtml = "";
	bottomFourHtml += robot.item.ascii[2];
	bottomFourHtml += robot.body.ascii[0];
	bottomFourHtml += robot.weapon.ascii[2];
	bottomFourHtml += "<br>";
	bottomFourHtml += robot.item.ascii[3];
	bottomFourHtml += robot.body.ascii[1];
	bottomFourHtml += robot.weapon.ascii[3];
	bottomFourHtml += "<br>";
	bottomFourHtml += robot.item.ascii[4];
	bottomFourHtml += robot.body.ascii[2];
	bottomFourHtml += robot.weapon.ascii[4];
	bottomFourHtml += "<br>";
	bottomFourHtml += robot.item.ascii[5];
	bottomFourHtml += robot.body.ascii[3];
	bottomFourHtml += robot.weapon.ascii[5];
	
	return bottomFourHtml;
};

var returnRobotHtml = function(robot){
	var html = "<pre style=\"font: 12px/10px monospace;\">";
	html += topTwoLines(robot);
	html += bottomFourLines(robot);
	html += "</pre>";
	return html;
};

var returnNameHtml = function(robot){
	var html = '<div class="robot-name">';
	html += robot.name;
	html += '</div>';
	
	return html;
};

var returnHealthHtml = function(robot){
	var html = '<div class="robot-health">Health: ';
	var health = robot.body.health < 0 ? 0 : robot.body.health;
	html += health;
	html += '</div>';
	
	return html;
};

var returnTeamHtml = function(team){
	var html = "";
	for (var i = 0; i < team.length; i++){
		var thisRobot = team[i];
		var robotHtml = '<div id="' + thisRobot.id + '" class="robot">';
		robotHtml += returnRobotHtml(thisRobot);
		robotHtml += returnNameHtml(thisRobot);
		robotHtml += returnHealthHtml(thisRobot);
		robotHtml += '</div>';
		html += robotHtml;
	}
	return html;
};

var showCurrentRobot = function(robot){
	$(".my-dashboard").append("<div class='current'></div>");
	var html = returnRobotHtml(robot);
	$(".my-dashboard .current").append(html);
};

var showDraftedRobots = function(team){
	$(".my-dashboard").append("<div class='drafted'></div>");
	var html = returnTeamHtml(team);
	$(".my-dashboard .drafted").append(html);
};

showTeam.showDraft = function(robot, team){
	$(".my-dashboard").empty();
	showCurrentRobot(robot);
	showDraftedRobots(team);
}

showTeam.show = function(team){ // build the html that shows team and stats
	$(".my-dashboard").empty();
	var html = returnTeamHtml(team);
	$(".my-dashboard").append(html);
};