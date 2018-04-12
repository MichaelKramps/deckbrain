$(document).ready(function(){
	var socket = io();
	$("#quick-match").on("click", function(){
		socket.emit("request-quick-match");
	});
}); 