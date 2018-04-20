var setup = require("./setup.js");

var g = ga(
  512, 512, setup.initiate,
  [
    //"sounds/chimes.wav"
  ]
);

//Start the Ga engine.
g.start();
