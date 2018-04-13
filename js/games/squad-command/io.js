$(document).ready(function(){
	var socket = io({transports: ['websocket'], upgrade: false});
	
	$("#quick-match").on("click", function(){
		console.log(socket.connected);
		socket.emit("request-quick-match");
	});
}); 