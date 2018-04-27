var setup = {}

var io = require("./io.js");

setup.initiate = function(){
	console.log("setup");
	io.start();
};

module.exports = setup;

// Game Structure
// 
// game states for quick match
// - pick hand
// - gameplay*
// - game over
// 
// *gameplay structure (both players play at the same time)
// 1. Draw a card - no player interaction
// 2. Energy Generation - no player interaction
// 3. Cards enter battlefield - no player interaction
//    i. Order is based on speed attribute (ties are simultaneous)
// 4. Players choose their ships' targets - player interaction
// 5. Ships fire on each other - no player interaction
//    i.   Order is based on speed attribute (ties are simultaneous)
//    ii.  After each firing there is a resolution
//    iii. Fire(s) | Resolve | Fire(s) | Resolve ...
// 6. Players can place 1 card on their control panel