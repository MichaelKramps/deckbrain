var numberRobots = 0;
var bodies = {};
var armors = {};
var weapons = {};
var robot = {};
var army = [];
var challenges = {};

var bodies = {
	tank: {health: 200, speed: 1},
	thief: {health: 40, speed: 10},
	fighter: {health: 100, speed: 4}
};

var armors = {
	scavenger: {dampen: 0, scrap: 100},
	chestplate: {dampen: 6, scrap: 0},
	magneticplate: {dampen: 2, scrap: 40}
};

var weapons = {
	grenades: {spread: 3, power: 5},
	superpunch: {spread: 1, power: 12},
	napalm: {spread: 10, power: 2}
};

var robot = {
	weapon: null,
	body: null,
	armor: null
};