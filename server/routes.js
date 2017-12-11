var routes = {};

module.exports = routes;

var path = require('path');

routes.set = function(app, express){
	
	app.use('/css', express.static(path.join(__dirname, '../css')));
	app.use('/js', express.static(path.join(__dirname, '../js')));
	
	app.get('/', function(req, res){
		res.render('prototypes');
	});
	
	app.get('/robot-royale', function(req, res){
		res.render('robot-royale');
	});
	
	app.get('/godrone', function(req, res){
		res.render('godrone');
	});
	
	app.get('/draft-poker-lobby', function(req, res){
		res.render('draft-poker-lobby');
	});
	
	app.get('/squad-command', function(req, res){
		res.render('squad-command');
	});
}