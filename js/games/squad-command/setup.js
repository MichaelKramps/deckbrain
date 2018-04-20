var setup = {}

var io = require("./io.js");

setup.initiate = function(){
	console.log("setup");
	io.start();
};

module.exports = setup;