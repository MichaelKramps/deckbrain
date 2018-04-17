$(document).ready(function(){
	var socket = io.connect("/squad-command");
	
	$("#quick-match").on("click", function(){
		console.log(socket.connected);
		socket.emit("request-quick-match");
	});
	
	socket.on("join-quick-match", function(gameIdObject){
		alert("joined game: " + gameIdObject.gameId);
	});
}); 