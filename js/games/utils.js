var utils = {};

module.exports = utils;

utils.getCookie = function (name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

var decode = {
	"0": 0,
	"1": 1,
	"2": 2,
	"3": 3,
	"4": 4,
	"5": 5,
	"6": 6,
	"7": 7,
	"8": 8,
	"9": 9,
	"a": 10,
	"b": 11,
	"c": 12,
	"d": 13,
	"e": 14,
	"f": 15,
	"g": 16,
	"h": 17,
	"i": 18,
	"j": 19,
	"k": 20,
	"l": 21,
	"m": 22,
	"n": 23,
	"o": 24,
	"p": 25,
	"q": 26,
	"r": 27,
	"s": 28,
	"t": 29,
	"u": 30,
	"v": 31,
	"w": 32,
	"x": 33,
	"y": 34,
	"z": 35
};

var encode = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var createAndReturnFirst10 = function () {
	var string = "";
	var encodeCopy = encode.slice();
	for (var i = 0; i < 10; i++) { // generate first 10 characters randomly
		var randomIndex = Math.floor(Math.random() * encodeCopy.length);
		string += encodeCopy[randomIndex];
		encodeCopy.splice(randomIndex, 1); // must guarantee unique characters
	}
	return string;
}

var createAndReturnLast36 = function (first10, unlockObject) {
	var string = "";
	for (var i = 0; i < encode.length; i++) { // generate first 10 characters randomly
		switch (i) {
			case decode[first10[0]]:
				string += unlockObject.level;
				break;
			case decode[first10[3]]:
				string += unlockObject.armor;
				break;
			case decode[first10[4]]:
				string += unlockObject.body;
				break;
			case decode[first10[7]]:
				string += unlockObject.item;
				break;
			case decode[first10[9]]:
				string += unlockObject.weapon;
				break;
			default:
				var randomIndex = Math.floor(Math.random() * encode.length);
				string += encode[randomIndex];
				break;
		}
	}
	return string;
}

var createAndReturnUnlockCode = function (unlockObject) {
	var first10 = createAndReturnFirst10();
	var last36 = createAndReturnLast36(first10, unlockObject);
	
	var unlockCode = first10.concat(last36);
	
	return unlockCode;
}

utils.setUnlockCode = function (unlockCode) {
	document.cookie = "unlockCode=" + unlockCode;
}

utils.getUnlockCode = function () {
	createAndReturnUnlockCode({level: "9", armor: "a", body: "4", item: "s", weapon: "4"});
	return parseInt(utils.getCookie("unlockCode"));
};

utils.setLevel = function (level) {
	document.cookie = "level=" + level;
}

utils.getLevel = function () {
	return parseInt(utils.getCookie("level"));
}


// password generation
// 
// fourth character determines the location of level unlock code
// 
// First 10 values are randomly generated (L00AB00I0W)
// 0's have no information
// L = Level unlock code location
// A = Armor unlock code location
// B = Body unlock code location
// I = Item unlock code location
// W = Weapon unlock code location
// 
// unlock codes are two characters 0-z (base 36 numbers)
// 
// These codes will become an integer and be compared to
// the unlock codes given to each item/level