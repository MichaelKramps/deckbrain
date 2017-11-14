var data = require("./data.js");
var ascii = require("./ascii.js");

var levels = [
	{ // level 1
	name: "Grandma's basement",
	unlock: 1,
	enemies: [
		[{ // 1.1
			name: "Random Bat",
			id: "e0",
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.bare,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.bat
		}],
		[{ // 1.2
			name: "Fat Bat",
			id: "e0",
			body: data.enemyBodies.standard,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.punch,
			ascii: ascii.enemies.fatBat
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
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.crocodile
		},
		{ // 1.1
			name: "Tock",
			id: "e1",
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.slap,
			ascii: ascii.enemies.crocodile
		}],
		[
		{ // 1.4
			name: "Fat Bat",
			id: "e0",
			body: data.enemyBodies.standard,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.punch,
			ascii: ascii.enemies.fatBat
		}
		]
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