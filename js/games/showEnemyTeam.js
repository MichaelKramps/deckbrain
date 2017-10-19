var $ = require("jquery");

var returnHealthHtml = function(enemy){
	var html = '<div class="enemy-health">Health: ';
	html += enemy.body.health;
	html += '</div>';
	
	return html;
};

var returnEnemyHtml = function(enemy){
	var html = '<div id="' + enemy.id + '" class="enemy"><pre style=\"font: 10px/8px monospace;\">';
	html += enemy.ascii;
	html += '</pre>';
	html += returnHealthHtml(enemy);
	html += '</div>';
	
	return html;
};

var returnEnemyTeamHtml = function(enemyTeam){
	var enemyTeamHtml = "";
	for(var i = 0; i < enemyTeam.length; i++){
		var thisEnemy = enemyTeam[i];
		enemyTeamHtml += returnEnemyHtml(thisEnemy);
	}
	return enemyTeamHtml;
};

var showEnemy = function(enemyTeam){ // build the html that shows team and stats
	$(".enemy-dashboard").empty();
	var html = returnEnemyTeamHtml(enemyTeam);
	$(".enemy-dashboard").append(html);
}

module.exports = showEnemy;