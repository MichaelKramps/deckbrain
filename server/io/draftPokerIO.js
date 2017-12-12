var draftPokerIO = {};
module.exports = draftPokerIO;

draftPokerIO.start = function(io){
	io.on('connection', function(socket){
		console.log('a user connected to the draft poker lobby');
		
		socket.on("draftPokerTwoPerson", function(){
			console.log("poker room requested");
		});
	});
}