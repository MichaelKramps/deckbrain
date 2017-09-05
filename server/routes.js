var routes = {};

module.exports = routes;

routes.set = function(app){
	
	app.get('/', function(req, res){
		res.render('static-page');
	});
	
	app.get('/squad-command', function(req, res){
		res.render('squad-command');
	});
}