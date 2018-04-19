$(document).ready(function(){
	var socket = io.connect("/squad-command");
	
	$("#quick-match").on("click", function(){
		socket.emit("request-quick-match");
	});
	
	$("h1").on("click", function(){
		socket.emit("emit-room");
	});
	
	socket.on("join-quick-match", function(gameId){
		document.cookie = "joinedGame=" + gameId;
	});
	
	socket.on("start-game", function(){
		console.log("start-game");
	});
}); 