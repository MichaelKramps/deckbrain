var middleware = {};

module.exports = middleware;

middleware.use = function(app){
	// force https
	app.use(function (req, res, next) {
		if (req.secure) {
			// request was via https, so do no special handling
			next();
		} else {
			// request was via http, so redirect to https
			res.redirect('https://' + req.hostname + req.originalUrl);
		}
	});
}