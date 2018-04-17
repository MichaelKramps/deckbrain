$(document).ready(function(){
	var socket = io.connect("/squad-command");
	
	$("#quick-match").on("click", function(){
		socket.emit("request-quick-match");
	});
	
	socket.on("join-quick-match", function(gameId){
		utilities.setCookie("joinedGame", gameId);
	});
}); 