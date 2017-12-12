var io = {}
module.exports = io;

io.start = function(io){
	io.on('connection', function(socket){
		console.log('a user connected');
		
		socket.on("draftPokerTwoPerson", function(){
			console.log("poker room requested");
		});
	});
}