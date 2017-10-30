var data = {};

module.exports = data;

data.numberRobots = 0;
data.number = [{name: "1 Robot"}, {name: "2 Robots"}, {name: "3 Robots"}, {name: "4 Robots"}];

data.bodies = [
	{name: "Tank", description: "You can take one heck of a beating", health: 200, speed: 1},
	{name: "Thief", description: "Good luck landing a punch on this guy", health: 40, speed: 10},
	{name: "Fighter", description: "Well rounded fighter. Mobile and tough.", health: 100, speed: 4}
];

data.enemyBodies = [
	{name: "Standard", health: 30, speed: 1},
	{name: "Formula Uno", health: 20, speed: 7},
	{name: "Flyer", health: 30, speed: 3},
	{name: "Scales", health: 50, speed: 2}
];

data.armors = [
	{name: "Scavenger", description: "Use your defeated opponents' scrap metal to repair yourself", dampen: 1, scrap: 0.8},
	{name: "Platinum Plate", description: "Lessens the effect of all attacks against you", dampen: 0.4, scrap: 0},
	{name: "Magnetic Plate", description: "Attacks are slightly less effective and you can sometimes repair yourself", dampen: 0.8, scrap: 0.4}
];

data.enemyArmors = [
	{name: "Enemy 1", dampen: 1, scrap: 0},
	{name: "Enemy 2", dampen: 0.8, scrap: 0.5},
	{name: "Enemy 3", dampen: 0.9, scrap: 0.1},
	{name: "Enemy 4", dampen: 0.7, scrap: 0.4}
];

data.weapons = [
	{name: "Grenades", description: "Respectable damage to a few closeby enemies", spread: 1, power: 5},
	{name: "Super Punch", description: "Huge amount of damage to one enemy", spread: 0, power: 12},
	{name: "Napalm", description: "Some damage to lots of enemies", spread: 4, power: 2}
];

data.enemyWeapons = [
	{name: "Enemy 1", power: 2, spread: 1},
	{name: "Enemy 2", power: 3, spread: 0},
	{name: "Enemy 3", power: 1, spread: 1},
	{name: "Enemy 4", power: 2, spread: 4}
];

// body is torso, armor is helmet, weapon is right arm, item is left arm

data.items = [
	{},
	{},
	{},
	{},
	{},
	{},
];

data.availableChoices = {
	draftChoices: [
		{title: "How many robots do you want on your team?", cards: data.number},
		{title: "What type of body will this robot have?", cards: data.bodies},
		{title: "What type of armor will this robot equip?", cards: data.armors},
		{title: "What weapon will this robot wield?", cards: data.weapons}
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
