var config = {};
var fs = require('fs');
var path = require('path');


module.exports = config;


config.secureOptions = {
    key: fs.readFileSync(path.join(__dirname, '../certs/superSecret.key')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/superSecret.cert'))
};

config.ports = {
	http: 80,
	https: 443
}