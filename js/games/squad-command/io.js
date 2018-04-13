$(document).ready(function(){
	var socket = io.connect("/squad-command");
	
	$("#quick-match").on("click", function(){
		console.log(socket.connected);
		socket.emit("request-quick-match");
	});
}); 