var utilities = {};

/*** Cookies ***/

utilities.setCookie = function(name,value,days){
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

utilities.getCookie = function(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

utilities.eraseCookie = function(name){   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

/*** Screen Resolution ***/

utilities.returnFullScreen = function(){
	var size = {};
	size.height = window.innerHeight;
	size.width = window.innerWidth;
	return size;
}

module.exports = utilities;