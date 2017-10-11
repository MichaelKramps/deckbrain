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

data.enemies = [
	[{
		name: "Enemy 1",
		health: 30,
		speed: 1,
		dampen: 0,
		scrap: 0,
		spread: 1,
		power: 3,
		ascii: "               (    )<br>              ((((()))<br>              |o\\ /o)|<br>              ( (  _')<br>               (._.  /\\__<br>              ,\\___,/ '  ')<br>'.,_,,       (  .- .   .    )<br> \\   \\\\     ( '        )(    )<br>  \\   \\\\    \\.  _.__ ____( .  |<br>   \\  /\\\\   .(   .'  /\\  '.  )<br>    \\(  \\\\.-' ( /    \\/    \\)<br>     '  ()) _'.-|/\\/\\/\\/\\/\\|<br>         '\\\\ .( |\\/\\/\\/\\/\\/|<br>           '((  \\    /\\    /<br>           ((((  '.__\\/__.')<br>            ((,) /   ((()   )<br>             '..-,  (()('   /<br>              _//.   ((() .'<br>      _____ //,/' ___ ((( ', ___<br>                       ((  )<br>                        / /<br>                      _/,/'<br> pils               /,/,'<br>"
	}],
	[{
		name: "Enemy 2",
		health: 10,
		speed: 8,
		dampen: 2,
		scrap: 0,
		spread: 1,
		power: 1,
		ascii: "                _ ___                /^^\\ /^\\  /^^\\_<br>    _          _@)@) \\            ,,/ '` ~ `'~~ ', `\\.<br>  _/o\\_ _ _ _/~`.`...'~\\        ./~~..,'`','',.,' '  ~:<br> / `,'.~,~.~  .   , . , ~|,   ,/ .,' , ,. .. ,,.   `,  ~\\_<br>( ' _' _ '_` _  '  .    , `\\_/ .' ..' '  `  `   `..  `,   \\_<br> ~V~ V~ V~ V~ ~\\ `   ' .  '    , ' .,.,''`.,.''`.,.``. ',   \\_<br>  _/\\ /\\ /\\ /\\_/, . ' ,   `_/~\\_ .' .,. ,, , _/~\\_ `. `. '.,  \\_<br> &lt; ~ ~ '~`'~'`, .,  .   `_: ::: \\_ '      `_/ ::: \\_ `.,' . ',  \\_<br>  \\ ' `_  '`_    _    ',/ _::_::_ \\ _    _/ _::_::_ \\   `.,'.,`., \\-,-,-,_,_,<br>   `'~~ `'~~ `'~~ `'~~  \\(_)(_)(_)/  `~~' \\(_)(_)(_)/ ~'`\\_.._,._,'_;_;_;_;_;"
	}],
	[{
		name: "Enemy 3",
		health: 30,
		speed: 3,
		dampen: 0,
		scrap: 0,
		spread: 2,
		power: 1,
		ascii: "             \\                  /<br>    _________))                ((__________<br>   /.-------./\\\\    \\    /    //\\.--------.\\<br>  //#######//##\\\\   ))  ((   //##\\\\########\\\\<br> //#######//###((  ((    ))  ))###\\\\########\\\\<br>((#######((#####\\\\  \\\\  //  //#####))########))<br> \\##' `###\\######\\\\  \\)(/  //######/####' `##/<br>  )'    ``#)'  `##\\`->oo<-'/##'  `(#''     `(<br>          (       ``\\`..'/''       )<br>                     \\''(<br>                      `- )<br>                      / /<br>                     ( /\\<br>                     /\\| \\<br>                    (  \\<br>                        )<br>                       /<br>                      (<br>                      `   Ed Zahurak"
	}],
	[{
		name: "Enemy 4",
		health: 50,
		speed: 1,
		dampen: 3,
		scrap: 1,
		spread: 4,
		power: 1,
		ascii: "              /|                                           |\\<br>             /||             ^               ^             ||\\<br>            / \\\\__          //               \\\\          __// \\<br>           /  |_  \\         | \\   /     \\   / |         /  _|  \\<br>          /  /  \\  \\         \\  \\/ \\---/ \\/  /         /  /     \\<br>         /  /    |  \\         \\  \\/\\   /\\/  /         /  |       \\<br>        /  /     \\   \\__       \\ ( 0\\ /0 ) /       __/   /        \\<br>       /  /       \\     \\___    \\ \\_/|\\_/ /    ___/     /\\         \\<br>      /  /         \\_)      \\___ \\/-\\|/-\\/ ___/      (_/\\ \\      `  \\<br>     /  /           /\\__)       \\/  oVo  \\/       (__/   ` \\      `  \\<br>    /  /           /,   \\__)    (_/\\ _ /\\_)    (__/         `      \\  \\<br>   /  '           //       \\__)  (__V_V__)  (__/                    \\  \\<br>  /  '  '        /'           \\   |{___}|   /         .              \\  \\<br> /  '  /        /              \\/ |{___}| \\/\\          `              \\  \\<br>/     /        '       .        \\/{_____}\\/  \\          \\    `         \\  \\<br>     /                ,         /{_______}\\   \\          \\    \\         \\<br>                     /         /{___/_\\___}\\   `          \\    `<br><br>                         Adrian Elhart"
	}]
];