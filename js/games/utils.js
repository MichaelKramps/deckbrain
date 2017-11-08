var utils = {};

module.exports = utils;

utils.getCookie = function (name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

utils.setUnlockCode = function (unlockCode) {
	document.cookie = "unlockCode=" + unlockCode;
}

utils.getUnlockCode = function () {
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
// unlock codes are two characters 0-Z (base 62 numbers)
// 
// These codes will become an integer and be compared to
// the unlock codes given to each item/level
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 