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
		[{ // 2.1
			name: "Tick",
			id: "e0",
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.crocodile
		},
		{
			name: "Tock",
			id: "e1",
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.slap,
			ascii: ascii.enemies.crocodile
		}],
		[
		{ // 2.2
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
		[{ // 3.1
			name: "Jimmy's creation",
			id: "e0",
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.bat
		},
		{
			name: "Johnny's creation",
			id: "e1",
			body: data.enemyBodies.standard,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.satyr
		},
		{
			name: "Judy's creation",
			id: "e2",
			body: data.enemyBodies.formulaUno,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.slap,
			ascii: ascii.enemies.bat
		},
		{
			name: "Jill's creation",
			id: "e3",
			body: data.enemyBodies.standard,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.slap,
			ascii: ascii.enemies.satyr
		}],
		[{ // 3.3
			name: "School computer",
			id: "e0",
			body: data.enemyBodies.blob,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.breathFire,
			ascii: ascii.enemies.computer
		}]
	]
	},
	{ // level 4
	name: "Dawn of A.I.",
	unlock: 4,
	enemies: [ 
		[{ // 4.1
			name: "Vending machine",
			id: "e0",
			body: data.enemyBodies.flyer,
			armor: data.enemyArmors.leatherJacket,
			weapon: data.enemyWeapons.hardPunch,
			ascii: ascii.enemies.sodaMachine
		},
		{
			name: "Soda machine",
			id: "e1",
			body: data.enemyBodies.scales,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.sodaMachine
		}],
		[{ // 4.2
			name: "Pay phone",
			id: "e0",
			body: data.enemyBodies.blob,
			armor: data.enemyArmors.magneticMail,
			weapon: data.enemyWeapons.hardPunch,
			ascii: ascii.enemies.sodaMachine
		}],
		[{ // 4.3
			name: "Iphone",
			id: "e0",
			body: data.enemyBodies.pilot,
			armor: data.enemyArmors.ironMail,
			weapon: data.enemyWeapons.punch,
			ascii: ascii.enemies.sodaMachine
		},
		{
			name: "Galaxy",
			id: "e1",
			body: data.enemyBodies.deer,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.hit,
			ascii: ascii.enemies.sodaMachine
		},
		{ // 4.3
			name: "Razor",
			id: "e0",
			body: data.enemyBodies.pilot,
			armor: data.enemyArmors.ironMail,
			weapon: data.enemyWeapons.hardPunch,
			ascii: ascii.enemies.sodaMachine
		},
		{ // 4.3
			name: "Pixel",
			id: "e0",
			body: data.enemyBodies.guy,
			armor: data.enemyArmors.jacket,
			weapon: data.enemyWeapons.slap,
			ascii: ascii.enemies.sodaMachine
		}],
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