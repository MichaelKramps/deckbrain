var $ = require("jquery");

var returnRobotHtml = function(){
	var html = "<pre style=\"font: 6px/3px monospace;\">                                  <br>                @@                <br>                .                 <br>                `                 <br>                `                 <br>                `                 <br>            .:::;::::`            <br>           +@@@@@@@@@@,           <br>           @@@@@@@@@@@#           <br>           #@@  ,'  @@+           <br>           +@@      '@,           <br>           :@@  `,  @@`           <br>           `@@@@@@@@@@            <br>            @@@@@@@@@@            <br>       @@@@.@@@@@@@@@@,@@@@       <br>       @@@@:@@@@@@@@@@'@@@@       <br>       @@@@+@@@@@@@@@@#@@@#       <br>       @@@@@,@@@@@@@@.@@@@+       <br>   ....#@@@@@`,,,,,,`@@@@@+....   <br>  :@@@@+@@@@@@@@@@@@@@@@@@;@@@@,  <br>  :@@@@;@@@@@@@@@@@@@@@@@@:@@@@,  <br>  :@@  :@@@@@`@: @@@@@@@@@,  @@,  <br>  :@@  .@@@@@@@@#,,@@@:@@@`  @@,  <br>  :@@   @@@@@`.+.. @@@:@@@   @@,  <br>  :@@   @@@:@'##@@@,@..@@@   @@,  <br>  :@@   @@@+@,@@@@@@,@#@@@   @@,  <br>  :@@   @@@,@#@@@@@@#;@.@@   @@,  <br>  :@@   @@@@ @+@@@@@::'`@@   @@.  <br>  :@@   @@@@#@..@@@:@,.'@@   @@,  <br>  :@@   @@@@#@@@``@@@+@@@@   @@,  <br>  +@@   @@@@#,` @.@@@,@@@@   @@'  <br> @   @  @@@@@@@@@@@``@@@@@  @   # <br> #   `. #@@@@@@@@@@@@@@@@@ .    # <br>        '@@@@@@@@@@@@@@@@@        <br>        ,@@@@@@@@@@@@@@@@@        <br>        .+++++++++++++++++        <br>              .@@@@               <br>              .@@@@               <br>              .@@@@               <br>              .@@@@               <br>              .@@@@               <br>              `....               <br>           '##########;           <br>           '##########;           <br>           :'''''''''':           <br>           `         ``           <br>           :'''''''''':           <br>           '##########;           <br>                                  </pre>";
	return html;
};

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

var returnTeamHtml = function(team){
	var html = "";
	for (var i = 0; i < team.length; i++){
		var thisRobot = team[i];
		var robotHtml = '<div id="' + thisRobot.id + '" class="robot">';
		robotHtml += returnRobotHtml();
		robotHtml += returnHealthHtml(thisRobot);
		robotHtml += returnSpeedHtml(thisRobot);
		robotHtml += returnDampenHtml(thisRobot);
		robotHtml += returnScrapHtml(thisRobot);
		robotHtml += returnSpreadHtml(thisRobot);
		robotHtml += returnPowerHtml(thisRobot);
		robotHtml += '</div>';
		html += robotHtml;
	}
	return html;
};

var showTeam = function(team){ // build the html that shows team and stats
	$(".my-dashboard").empty();
	var html = returnTeamHtml(team);
	$(".my-dashboard").append(html);
}

module.exports = showTeam;