var $ = require("jquery");

var returnHealthHtml = function(enemy){
	var html = '<div class="enemy-health">Health: ';
	html += enemy.health;
	html += '</div>';
	
	return html;
};

var returnSpeedHtml = function(enemy){
	var html = '<div class="enemy-speed">Speed: ';
	html += enemy.speed;
	html += '</div>';
	
	return html;
};

var returnDampenHtml = function(enemy){
	var html = '<div class="enemy-dampen">Dampen: ';
	html += enemy.dampen;
	html += '</div>';
	
	return html;
};

var returnScrapHtml = function(enemy){
	var html = '<div class="enemy-scrap">Scrap: ';
	html += enemy.scrap;
	html += '</div>';
	
	return html;
};

var returnSpreadHtml = function(enemy){
	var html = '<div class="enemy-spread">Spread: ';
	html += enemy.spread;
	html += '</div>';
	
	return html;
};

var returnPowerHtml = function(enemy){
	var html = '<div class="enemy-power">Power: ';
	html += enemy.power;
	html += '</div>';
	
	return html;
};

var returnEnemyHtml = function(enemy){
	var html = '<div class="enemy"><pre style=\"font: 10px/8px monospace;\">';
	html += enemy.ascii;
	html += '</pre>';
	html += returnHealthHtml(enemy);
	html += returnSpeedHtml(enemy);
	html += returnDampenHtml(enemy);
	html += returnScrapHtml(enemy);
	html += returnSpreadHtml(enemy);
	html += returnPowerHtml(enemy);
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