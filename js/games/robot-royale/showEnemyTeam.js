var $ = require("jquery");

var returnHealthHtml = function(enemy){
	var html = '<div class="enemy-health">Health: ';
	html += (enemy.body.health + "/" + enemy.body.maxHealth);
	html += '</div>';
	
	return html;
};

var returnNameHtml = function(enemy){
	var html = '<div class="enemy-name">';
	html += enemy.name;
	html += '</div>';
	
	return html;
};

var returnEnemyHtml = function(enemy){
	var html = '<div id="' + enemy.id + '" class="enemy"><pre style=\"font: 12px/10px monospace;\">';
	html += enemy.ascii;
	html += '</pre>';
	html += returnNameHtml(enemy);
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