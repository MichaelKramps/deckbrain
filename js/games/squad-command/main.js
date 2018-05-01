var setup = require("./setup.js");
var utilities = require("../utilities.js");

// maybe pull this out to a settings file
var screenSize = utilities.returnFullScreen();

var g = ga(
  screenSize.width, screenSize.height, setup.initiate
);

//Start the Ga engine.
g.start();
