var io = require("./io.js");

io.start();

var g = ga(
  512, 512, setup,
  [
    //"sounds/chimes.wav"
  ]
);

//Start the Ga engine.
g.start();
