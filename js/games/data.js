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
		health: 30,
		maxHealth: 30,
		speed: 1,
		unlock: 1,
		ascii: ascii.bodies.marshmallow
	},
	{
		name: "Stick Man",
		description: "You're fast, but you can't take a hit",
		health: 20,
		maxHealth: 20,
		speed: 5,
		unlock: 1,
		ascii: ascii.bodies.stickMan
	},
	{
		name: "Tank",
		description: "You can take one heck of a beating",
		health: 200,
		maxHealth: 200,
		speed: 1,
		unlock: 2,
		ascii: ascii.bodies.tank
	},
	{
		name: "Thief",
		description: "Good luck landing a punch on this guy",
		health: 40,
		maxHealth: 40,
		speed: 10,
		unlock: 3,
		ascii: ascii.bodies.thief
	},
	{
		name: "Fighter",
		description: "Well rounded fighter. Mobile and tough.",
		health: 100,
		maxHealth: 100,
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
		dampen: 1,
		scrap: 0,
		unlock: 1,
		ascii: ascii.armors.baseballHat
	},
	{
		name: "Turban",
		description: "You look tougher",
		dampen: 0.95,
		scrap: 0,
		unlock: 1,
		ascii: ascii.armors.turban
	},
	{
		name: "Scavenger",
		description: "Use your defeated opponents' scrap metal to repair yourself",
		dampen: 1,
		scrap: 0.8,
		unlock: 2,
		ascii: ascii.armors.scavenger
	},
	{
		name: "Platinum Plate",
		description: "Lessens the effect of all attacks against you",
		dampen: 0.4,
		scrap: 0,
		unlock: 3,
		ascii: ascii.armors.platinumPlate
	},
	{
		name: "Magnetic Plate",
		description: "Attacks are slightly less effective and you can sometimes repair yourself",
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
		spread: 0,
		power: 3,
		unlock: 1,
		ascii: ascii.weapons.grenades
	},
	{
		name: "Slap",
		description: "Weak attack to a few closeby enemies",
		spread: 1,
		power: 1,
		unlock: 1,
		ascii: ascii.weapons.grenades
	},
	{
		name: "Grenades",
		description: "Respectable damage to a few closeby enemies",
		spread: 1,
		power: 5,
		unlock: 2,
		ascii: ascii.weapons.grenades
	},
	{
		name: "Super Punch",
		description: "Huge amount of damage to one enemy",
		spread: 0,
		power: 12,
		unlock: 3,
		ascii: ascii.weapons.superPunch
	},
	{
		name: "Napalm",
		description: "Some damage to lots of enemies",
		spread: 4,
		power: 2,
		unlock: 4,
		ascii: ascii.weapons.napalm
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
		action: itemActions.sandwiches,
		targets: "friendlies",
		unlock: 1,
		ascii: ascii.items.sandwiches
	},
	{
		name: "Springs", // Item to improve speed
		description: "Make sure you are first to attack each round",
		action: itemActions.springs,
		targets: "friendlies",
		unlock: 1,
		ascii: ascii.items.springs
	},
	{
		name: "Nets", // Item to weaken enemy attacks
		description: "Disrupt your enemies attacks",
		action: itemActions.nets,
		targets: "enemies",
		unlock: 2,
		ascii: ascii.items.nets
	},
	{
		name: "Jackets", // Item to improve defense
		description: "You can absorb some of your enemies' attacks",
		action: itemActions.jackets,
		targets: "friendlies",
		unlock: 3,
		ascii: ascii.items.jackets
	},
	{
		name: "Chemicals", // Item to attack passively
		description: "Poisons opponents to deal damage each turn",
		action: itemActions.chemicals,
		targets: "enemies",
		unlock: 4,
		ascii: ascii.items.chemicals
	},
	{
		name: "Smelling Salts", // Item with chance to revive ally
		description: "Provides a chance to revive an ally",
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
