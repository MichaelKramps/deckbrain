var gameplay = {};

gameplay.startTurn = function(){
	console.log("start turn");
	// create any new game items
	//
	// start turn (changes in game state must be checked/performed on server)
	// 1. Draw a card - no player interaction
	// 2. Energy Generation - no player interaction
	// 3. Cards enter battlefield - no player interaction
	//    i. Order is based on speed attribute (ties are simultaneous)
	// 4. Players choose their ships' targets - player interaction
	// 5. Ships fire on each other - no player interaction
	//    i.   Order is based on speed attribute (ties are simultaneous)
	//    ii.  After each firing there is a resolution
	//    iii. Fire(s) | Resolve | Fire(s) | Resolve ...
	//    iv.  Check for game ending criteria after each resolution
	//    v.   If game is over start game over screen (g.state = gameOver;)
	// 6. Players can place 1 card on their control panel
	// end turn
	//
	// if game has not ended start another turn
}

module.exports = gameplay;