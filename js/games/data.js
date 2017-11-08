var data = {};

module.exports = data;

var ascii = require("./ascii.js");
var itemActions = require("./itemActions.js");

data.numberRobots = 0;
data.number = [{name: "1 Robot"}, {name: "2 Robots"}, {name: "3 Robots"}, {name: "4 Robots"}];

data.bodies = [
	{
		name: "Tank",
		description: "You can take one heck of a beating",
		health: 200,
		speed: 1,
		ascii: ascii.bodies.tank
	},
	{
		name: "Thief",
		description: "Good luck landing a punch on this guy",
		health: 40,
		speed: 10,
		ascii: ascii.bodies.thief
	},
	{
		name: "Fighter",
		description: "Well rounded fighter. Mobile and tough.",
		health: 100,
		speed: 4,
		ascii: ascii.bodies.fighter
	}
];

data.enemyBodies = [
	{name: "Standard", health: 30, speed: 1},
	{name: "Formula Uno", health: 20, speed: 7},
	{name: "Flyer", health: 30, speed: 3},
	{name: "Scales", health: 50, speed: 2}
];

data.armors = [
	{
		name: "Scavenger",
		description: "Use your defeated opponents' scrap metal to repair yourself",
		dampen: 1,
		scrap: 0.8,
		ascii: ascii.armors.scavenger
	},
	{
		name: "Platinum Plate",
		description: "Lessens the effect of all attacks against you",
		dampen: 0.4,
		scrap: 0,
		ascii: ascii.armors.platinumPlate
	},
	{
		name: "Magnetic Plate",
		description: "Attacks are slightly less effective and you can sometimes repair yourself",
		dampen: 0.8,
		scrap: 0.4,
		ascii: ascii.armors.magneticPlate
	}
];

data.enemyArmors = [
	{name: "Enemy 1", dampen: 1, scrap: 0},
	{name: "Enemy 2", dampen: 0.8, scrap: 0.5},
	{name: "Enemy 3", dampen: 0.9, scrap: 0.1},
	{name: "Enemy 4", dampen: 0.7, scrap: 0.4}
];

data.weapons = [
	{
		name: "Grenades",
		description: "Respectable damage to a few closeby enemies",
		spread: 1,
		power: 5,
		ascii: ascii.weapons.grenades
	},
	{
		name: "Super Punch",
		description: "Huge amount of damage to one enemy",
		spread: 0,
		power: 120,
		ascii: ascii.weapons.superPunch
	},
	{
		name: "Napalm",
		description: "Some damage to lots of enemies",
		spread: 4,
		power: 2,
		ascii: ascii.weapons.napalm
	}
];

data.enemyWeapons = [
	{name: "Enemy 1", power: 2, spread: 1},
	{name: "Enemy 2", power: 3, spread: 0},
	{name: "Enemy 3", power: 1, spread: 1},
	{name: "Enemy 4", power: 2, spread: 4}
];

// body is torso, armor is helmet, weapon is right arm, item is left arm

data.items = [
	{
		name: "Sandwiches", // Item to heal target
		description: "Eat a sandwich to heal yourself",
		action: itemActions.sandwiches,
		passive: false,
		targets: "friendlies",
		ascii: ascii.items.sandwiches
	},
	{
		name: "Springs", // Item to always hit first
		description: "Make sure you are first to attack each round",
		action: itemActions.springs,
		passive: true,
		targets: null,
		ascii: ascii.items.springs
	},
	{
		name: "Nets", // Item to weaken enemy attacks
		description: "Disrupt your enemies attacks",
		action: itemActions.nets,
		passive: false,
		targets: "enemies",
		ascii: ascii.items.nets
	},
	{
		name: "Jackets", // Item to improve defense
		description: "You can absorb some of your enemies' attacks",
		action: itemActions.jackets,
		passive: false,
		targets: "friendlies",
		ascii: ascii.items.jackets
	},
	{
		name: "Smelling Salts", // Item with chance to revive ally
		description: "Provides a chance to revive an ally",
		action: itemActions.smellingSalts,
		passive: false,
		targets: "friendlies",
		ascii: ascii.items.smellingSalts
	},
	{
		name: "Chemicals", // Item to attack passively
		description: "Poisons opponents to deal damage each turn",
		action: itemActions.chemicals,
		passive: true,
		targets: "enemies",
		ascii: ascii.items.chemicals
	},
];

data.availableChoices = {
	draftChoices: [
		{title: "How many robots do you want on your team?", cards: data.number},
		{title: "What type of body will this robot have?", cards: data.bodies},
		{title: "What type of armor will this robot equip?", cards: data.armors},
		{title: "What weapon will this robot wield?", cards: data.weapons},
		{title: "What item will this robot carry?", cards: data.items}
	]
};
	
data.robotNames = [
	"CyberJohn",
	"Isut",
	"Sona",
	"Mechael",
	"42696C6C",
	"Kevin",
	"Axel",
	"L.O.V.E",
	"Silver Slick",
	"Samdroid",
	"Tinker",
	"Mr. Robot",
	"Magic Fist",
	"Ogo",
	"Builderino",
	"Tron 3:16",
	"Brobot",
	"Pip",
	"Hot Mama Cheese",
	"Frodo",
	"Dominatrices",
	"Tim",
	"Eloise",
	"Tuck",
	"Frump",
	"The Governor",
	"Angela",
	"Holy Binary",
	"Hex",
	"Mike Planeswalker",
];
