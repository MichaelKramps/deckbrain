var routes = {};

module.exports = routes;

var path = require('path');

routes.set = function(app, express){
	
	app.use('/css', express.static(path.join(__dirname, '../css')));
	app.use('/js', express.static(path.join(__dirname, '../js')));
	
	app.get('/', function(req, res){
		res.render('static-page');
	});
	
	app.get('/robot-royale', function(req, res){
		res.render('robot-royale');
	});
	
	app.get('/squad-command', function(req, res){
		res.render('squad-command');
	});
}