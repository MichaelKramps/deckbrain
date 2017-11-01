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