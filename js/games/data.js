var data = {};

module.exports = data;

data.numberRobots = 0;
data.number = [{name: "1 Robot"}, {name: "2 Robots"}, {name: "3 Robots"}, {name: "4 Robots"}];

data.bodies = [
	{name: "Tank", description: "You can take one heck of a beating", health: 200, speed: 1},
	{name: "Thief", description: "Good luck landing a punch on this guy", health: 40, speed: 10},
	{name: "Fighter", description: "Well rounded fighter. Mobile and tough.", health: 100, speed: 4}
];

data.armors = [
	{name: "Scavenger", description: "Use your defeated opponents' scrap metal to repair yourself", dampen: 0, scrap: 80},
	{name: "Platinum Plate", description: "Lessens the effect of all attacks against you", dampen: 6, scrap: 0},
	{name: "Magnetic Plate", description: "Attacks are slightly less effective and you can sometimes repair yourself", dampen: 2, scrap: 40}
];

data.weapons = [
	{name: "Grenades", description: "Respectable damage to a few closeby enemies", spread: 3, power: 5},
	{name: "Super Punch", description: "Huge amount of damage to one enemy", spread: 1, power: 12},
	{name: "Napalm", description: "Some damage to lots of enemies", spread: 10, power: 2}
];

data.availableChoices = [
	{title: "How many robots do you want on your team?", cards: data.number},
	{title: "What type of body will your robot team have?", cards: data.bodies},
	{title: "What type of armor will your robot team have", cards: data.armors},
	{title: "What weapons will they carry?", cards: data.weapons}
];

data.enemies = [];