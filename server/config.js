exports = module.exports = {};


var fs = require('fs');
var path = require('path');


exports.secureOptions = {
    key: fs.readFileSync(path.join(__dirname, '../certs/superSecret.key')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/superSecret.cert'))
};

exports.ports = {
	http: 8080,
	https: 8443
}