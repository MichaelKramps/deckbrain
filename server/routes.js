var routes = {};

module.exports = routes;

routes.set = function(app){
	app.get('/', function(req, res){
		res.render('static-page');
	});
}