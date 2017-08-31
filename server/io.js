var io = {}
module.exports = io;

io.Start = function(io){
	io.on('connection', function(socket){
		console.log('a user connected');
	});
}