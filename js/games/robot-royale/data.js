var data = {};

module.exports = data;

var ascii = require("./ascii.js");
var itemActions = require("./itemActions.js");

data.numberRobots = 0;
data.number = [
	{name: "1 Robot"},
	{name: "2 Robots"},
	{name: "3 Robots"},
	{name: "4 Robots"}
];

data.bodies = [
	{
		name: "Marshmallow",
		description: "You really need to toughen up",
		id: 0,
		health: 30,
		maxHealth: 30,
		speed: 1,
		unlock: 1,
		ascii: ascii.bodies.marshmallow
	},
	{
		name: "Stick Man",
		description: "You're fast, but you can't take a hit",
		id: 1,
		health: 20,
		maxHealth: 20,
		speed: 5,
		unlock: 1,
		ascii: ascii.bodies.stickMan
	},
	{
		name: "Tank",
		description: "You can take one heck of a beating",
		id: 2,
		health: 80,
		maxHealth: 80,
		speed: 1,
		unlock: 2,
		ascii: ascii.bodies.tank
	},
	{
		name: "Thief",
		description: "Good luck landing a punch on this guy",
		id: 3,
		health: 40,
		maxHealth: 40,
		speed: 8,
		unlock: 3,
		ascii: ascii.bodies.thief
	},
	{
		name: "Fighter",
		description: "Well rounded fighter. Mobile and tough.",
		id: 4,
		health: 60,
		maxHealth: 60,
		speed: 4,
		unlock: 4,
		ascii: ascii.bodies.fighter
	}
];

data.enemyBodies = {
	"standard": {health: 10, maxHealth: 10, speed: 1},
	"formulaUno": {health: 8, maxHealth: 8, speed: 7},
	"flyer": {health: 15, maxHealth: 15, speed: 3},
	"scales": {health: 25, maxHealth: 25, speed: 2},
	"guy": {health: 17, maxHealth: 17, speed: 4},
	"blob": {health: 30, maxHealth: 30, speed: 1},
	"deer": {health: 10, maxHealth: 10, speed: 8},
	"pilot": {health: 7, maxHealth: 7, speed: 10},
	"roller": {health: 20, maxHealth: 20, speed: 3},
	"hover": {health: 12, maxHealth: 12, speed: 5},
	"maker": {health: 25, maxHealth: 25, speed: 3}
};

data.armors = [
	{
		name: "Baseball hat",
		description: "At least it keeps the sun out of your eyes",
		id: 0,
		dampen: 1,
		scrap: 0,
		unlock: 1,
		ascii: ascii.armors.baseballHat
	},
	{
		name: "Turban",
		description: "You look tougher",
		id: 1,
		dampen: 0.95,
		scrap: 0,
		unlock: 1,
		ascii: ascii.armors.turban
	},
	{
		name: "Scavenger",
		description: "Use your defeated opponents' scrap metal to repair yourself",
		id: 2,
		dampen: 1,
		scrap: 0.8,
		unlock: 2,
		ascii: ascii.armors.scavenger
	},
	{
		name: "Platinum Plate",
		description: "Lessens the effect of all attacks against you",
		id: 3,
		dampen: 0.4,
		scrap: 0,
		unlock: 3,
		ascii: ascii.armors.platinumPlate
	},
	{
		name: "Magnetic Plate",
		description: "Attacks are slightly less effective and you can sometimes repair yourself",
		id: 4,
		dampen: 0.8,
		scrap: 0.4,
		unlock: 4,
		ascii: ascii.armors.magneticPlate
	}
];

data.enemyArmors = {
	"bare": {dampen: 1, scrap: 0},
	"jacket": {dampen: 0.9, scrap: 0},
	"magneticJacket": {dampen: 0.9, scrap: 0.1},
	"leatherJacket": {dampen: 0.8, scrap: 0},
	"mail": {dampen: 0.7, scrap: 0},
	"magneticMail": {dampen: 0.8, scrap: 0.2},
	"ironMail": {dampen: 0.6, scrap: 0},
	"electromagnet": {dampen: 0, scrap: 0.5},
	"armor": {dampen: 0.5, scrap: 0},
};

data.weapons = [
	{
		name: "Punch",
		description: "Hit an enemy with your brute strength",
		id: 0,
		spread: 0,
		power: 3,
		unlock: 1,
		ascii: ascii.weapons.punch
	},
	{
		name: "Slap",
		description: "Weak attack to a few closeby enemies",
		id: 1,
		spread: 1,
		power: 1,
		unlock: 1,
		ascii: ascii.weapons.slap
	},
	{
		name: "Napalm",
		description: "Some damage to lots of enemies",
		id: 2,
		spread: 4,
		power: 2,
		unlock: 2,
		ascii: ascii.weapons.napalm
	},
	{
		name: "Grenades",
		description: "Respectable damage to a few closeby enemies",
		id: 3,
		spread: 1,
		power: 5,
		unlock: 3,
		ascii: ascii.weapons.grenades
	},
	{
		name: "Super Punch",
		description: "Huge amount of damage to one enemy",
		id: 4,
		spread: 0,
		power: 12,
		unlock: 4,
		ascii: ascii.weapons.superPunch
	}
];

data.enemyWeapons = {
	"hit": {power: 2, spread: 0},
	"slap": {power: 1, spread: 1},
	"punch": {power: 4, spread: 0},
	"breathFire": {power: 3, spread: 2},
	"hardPunch": {power: 6, spread: 0},
	"kick": {power: 8, spread: 0},
	"roundhouse": {power: 10, spread: 0},
	"superPunch": {power: 12, spread: 0},
	"grenades": {power: 5, spread: 1},
	"meteor": {power: 16, spread: 0},
	"meteorShower": {power: 8, spread: 2}
};

// body is torso, armor is helmet, weapon is right arm, item is left arm

data.items = [
	{
		name: "Sandwiches", // Item to heal target
		description: "Eat a sandwich to heal yourself",
		id: 0,
		action: itemActions.sandwiches,
		targets: "friendlies",
		unlock: 1,
		ascii: ascii.items.sandwiches
	},
	{
		name: "Springs", // Item to improve speed
		description: "Make sure you are first to attack each round",
		id: 1,
		action: itemActions.springs,
		targets: "friendlies",
		unlock: 1,
		ascii: ascii.items.springs
	},
	{
		name: "Nets", // Item to weaken enemy attacks
		description: "Disrupt your enemies attacks",
		id: 2,
		action: itemActions.nets,
		targets: "enemies",
		unlock: 2,
		ascii: ascii.items.nets
	},
	{
		name: "Jackets", // Item to improve defense
		description: "You can absorb some of your enemies' attacks",
		id: 3,
		action: itemActions.jackets,
		targets: "friendlies",
		unlock: 3,
		ascii: ascii.items.jackets
	},
	{
		name: "Chemicals", // Item to attack passively
		description: "Poisons opponents to deal damage each turn",
		id: 4,
		action: itemActions.chemicals,
		targets: "enemies",
		unlock: 4,
		ascii: ascii.items.chemicals
	},
	{
		name: "Smelling Salts", // Item with chance to revive ally
		description: "Provides a chance to revive an ally",
		id: 5,
		action: itemActions.smellingSalts,
		targets: "friendlies",
		unlock: 5,
		ascii: ascii.items.smellingSalts
	},
];

data.availableChoices = {
	draftChoices: [
		{title: "How many robots do you want on your team?", code: "robots", cards: data.number},
		{title: "What type of body will this robot have?", code: "body", cards: data.bodies},
		{title: "What type of armor will this robot equip?", code: "armor", cards: data.armors},
		{title: "What weapon will this robot wield?", code: "weapon", cards: data.weapons},
		{title: "What item will this robot carry?", code: "item", cards: data.items}
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
	"Domino",
	"Tim",
	"Eloise",
	"Tuck",
	"Frump",
	"The Governor",
	"Angela",
	"Holy Binary",
	"Hex",
	"Mike Planeswalker",
	"Keith",
	"Fritas",
	"Bob",
	"Cap",
	"Dirk",
	"Mini Optimus",
	"Prime",
	"Dethmetal",
	"Arthur",
	"Ellie",
	"Mousemah",
	"Jean-Luc",
	"Lt. Liker",
	"Datum",
	"Shepard",
	"Four Dog",
	"Walawario",
	"Yoshy",
	"Shiek",
	"Ganon in C",
	"Lavascript",
	"Malfurious",
	"Liliana",
	"The White Rabbit"
];
