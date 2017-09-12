var numberRobots = 0;
var number = [{name: "1 Robot"}, {name: "2 Robots"}, {name: "3 Robots"}, {name: "4 Robots"}];
var bodies = [];
var armors = [];
var weapons = [];
var availableChoices = [];
var choicesMade = [];
var robot = {};
var army = [];
var challenges = {};

var bodies = [
	{name: "Tank", description: "You can take one heck of a beating", health: 200, speed: 1},
	{name: "Thief", description: "Good luck landing a punch on this guy", health: 40, speed: 10},
	{name: "Fighter", description: "Well rounded fighter. Mobile and tough.", health: 100, speed: 4}
];

var armors = [
	{name: "Scavenger", description: "Use your defeated opponents' scrap metal to repair yourself", dampen: 0, scrap: 80},
	{name: "Platinum Plate", description: "Lessens the effect of all attacks against you", dampen: 6, scrap: 0},
	{name: "Magnetic Plate", description: "Attacks are slightly less effective and you can sometimes repair yourself", dampen: 2, scrap: 40}
];

var weapons = [
	{name: "Grenades", description: "Respectable damage to a few closeby enemies", spread: 3, power: 5},
	{name: "Super Punch", description: "Huge amount of damage to one enemy", spread: 1, power: 12},
	{name: "Napalm", description: "Some damage to lots of enemies", spread: 10, power: 2}
];

var availableChoices = [
	{title: "How many robots do you want on your team?", cards: number},
	{title: "What type of body will your robot team have?", cards: bodies},
	{title: "What type of armor will your robot team have", cards: armors},
	{title: "What weapons will they carry?", cards: weapons}
];

var robot = {
	weapon: null,
	body: null,
	armor: null
};