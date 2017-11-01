var data = require("./data.js");
var ascii = require("./ascii.js");

var levels = [
	{ // level 1
	name: "Grandma's basement",
	unlock: 1, // code % 2741 gives the most recent unlock, I can get a better algorithm later
	enemies: [
		[{ // 1.1
			name: "Tumners",
			id: "e0",
			body: data.enemyBodies[0],
			armor: data.enemyArmors[0],
			weapon: data.enemyWeapons[0],
			ascii: ascii.enemies.satyr
		}],
		[{ // 1.2
			name: "Tick",
			id: "e0",
			body: data.enemyBodies[1],
			armor: data.enemyArmors[1],
			weapon: data.enemyWeapons[1],
			ascii: ascii.enemies.crocodile
		},
		{
			name: "Tock",
			id: "e1",
			body: data.enemyBodies[1],
			armor: data.enemyArmors[1],
			weapon: data.enemyWeapons[1],
			ascii: ascii.enemies.crocodile
		}],
		[{ // 1.3
			name: "Random Bat",
			id: "e0",
			body: data.enemyBodies[2],
			armor: data.enemyArmors[2],
			weapon: data.enemyWeapons[2],
			ascii: ascii.enemies.bat
		}],
		[{ // 1.4
			name: "Fat Bat",
			id: "e0",
			body: data.enemyBodies[3],
			armor: data.enemyArmors[3],
			weapon: data.enemyWeapons[3],
			ascii: ascii.enemies.dragon
		}]
	]
	},
	{ // level 2
	name: "School fair",
	unlock: 2,
	enemies: [
		[{ // 1.2
			name: "Tick",
			id: "e0",
			body: data.enemyBodies[1],
			armor: data.enemyArmors[1],
			weapon: data.enemyWeapons[1],
			ascii: ascii.enemies.crocodile
		},
		{ // 1.1
			name: "Tumners",
			id: "e0",
			body: data.enemyBodies[0],
			armor: data.enemyArmors[0],
			weapon: data.enemyWeapons[0],
			ascii: ascii.enemies.satyr
		},
		{ // 1.3
			name: "Random Bat",
			id: "e0",
			body: data.enemyBodies[2],
			armor: data.enemyArmors[2],
			weapon: data.enemyWeapons[2],
			ascii: ascii.enemies.bat
		}],
		[
		{ // 1.4
			name: "Fat Bat",
			id: "e0",
			body: data.enemyBodies[3],
			armor: data.enemyArmors[3],
			weapon: data.enemyWeapons[3],
			ascii: ascii.enemies.dragon
		},
		{ // 1.2
			name: "Tock",
			id: "e0",
			body: data.enemyBodies[1],
			armor: data.enemyArmors[1],
			weapon: data.enemyWeapons[1],
			ascii: ascii.enemies.crocodile
		}]
	]
	},
	{ // level 3
	name: "Catastrophic failure!",
	unlock: 3,
	enemies: [ 
		
	]
	},
	{ // level 4
	name: "Dawn of A.I.",
	unlock: 4,
	enemies: [ 
		
	]
	},
	{ // level 5
	name: "Uprising",
	unlock: 5,
	enemies: [ 
		
	]
	},
	{ // level 6
	name: "Sergeant Dan",
	unlock: 6,
	enemies: [ 
		
	]
	},
];

module.exports = levels;