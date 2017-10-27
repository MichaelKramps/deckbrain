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
	{name: "Enemy 1", health: 30, speed: 1},
	{name: "Enemy 2", health: 20, speed: 10},
	{name: "Enemy 3", health: 30, speed: 3},
	{name: "Enemy 4", health: 50, speed: 2}
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

data.enemies = [
	[{
		name: "Enemy 1",
		id: "e0",
		body: data.enemyBodies[0],
		armor: data.enemyArmors[0],
		weapon: data.enemyWeapons[0],
		ascii: "               (    )<br>              ((((()))<br>              |o\\ /o)|<br>              ( (  _')<br>               (._.  /\\__<br>              ,\\___,/ '  ')<br>'.,_,,       (  .- .   .    )<br> \\   \\\\     ( '        )(    )<br>  \\   \\\\    \\.  _.__ ____( .  |<br>   \\  /\\\\   .(   .'  /\\  '.  )<br>    \\(  \\\\.-' ( /    \\/    \\)<br>     '  ()) _'.-|/\\/\\/\\/\\/\\|<br>         '\\\\ .( |\\/\\/\\/\\/\\/|<br>           '((  \\    /\\    /<br>           ((((  '.__\\/__.')<br>            ((,) /   ((()   )<br>             '..-,  (()('   /<br>              _//.   ((() .'<br>      _____ //,/' ___ ((( ', ___<br>                       ((  )<br>                        / /<br>                      _/,/'<br> pils               /,/,'<br>"
	}],
	[{
		name: "Enemy 2",
		id: "e0",
		body: data.enemyBodies[1],
		armor: data.enemyArmors[1],
		weapon: data.enemyWeapons[1],
		ascii: "                _ ___                /^^\\ /^\\  /^^\\_<br>    _          _@)@) \\            ,,/ '` ~ `'~~ ', `\\.<br>  _/o\\_ _ _ _/~`.`...'~\\        ./~~..,'`','',.,' '  ~:<br> / `,'.~,~.~  .   , . , ~|,   ,/ .,' , ,. .. ,,.   `,  ~\\_<br>( ' _' _ '_` _  '  .    , `\\_/ .' ..' '  `  `   `..  `,   \\_<br> ~V~ V~ V~ V~ ~\\ `   ' .  '    , ' .,.,''`.,.''`.,.``. ',   \\_<br>  _/\\ /\\ /\\ /\\_/, . ' ,   `_/~\\_ .' .,. ,, , _/~\\_ `. `. '.,  \\_<br> &lt; ~ ~ '~`'~'`, .,  .   `_: ::: \\_ '      `_/ ::: \\_ `.,' . ',  \\_<br>  \\ ' `_  '`_    _    ',/ _::_::_ \\ _    _/ _::_::_ \\   `.,'.,`., \\-,-,-,_,_,<br>   `'~~ `'~~ `'~~ `'~~  \\(_)(_)(_)/  `~~' \\(_)(_)(_)/ ~'`\\_.._,._,'_;_;_;_;_;"
	},
	{
		name: "Enemy 2",
		id: "e0",
		body: data.enemyBodies[1],
		armor: data.enemyArmors[1],
		weapon: data.enemyWeapons[1],
		ascii: "                _ ___                /^^\\ /^\\  /^^\\_<br>    _          _@)@) \\            ,,/ '` ~ `'~~ ', `\\.<br>  _/o\\_ _ _ _/~`.`...'~\\        ./~~..,'`','',.,' '  ~:<br> / `,'.~,~.~  .   , . , ~|,   ,/ .,' , ,. .. ,,.   `,  ~\\_<br>( ' _' _ '_` _  '  .    , `\\_/ .' ..' '  `  `   `..  `,   \\_<br> ~V~ V~ V~ V~ ~\\ `   ' .  '    , ' .,.,''`.,.''`.,.``. ',   \\_<br>  _/\\ /\\ /\\ /\\_/, . ' ,   `_/~\\_ .' .,. ,, , _/~\\_ `. `. '.,  \\_<br> &lt; ~ ~ '~`'~'`, .,  .   `_: ::: \\_ '      `_/ ::: \\_ `.,' . ',  \\_<br>  \\ ' `_  '`_    _    ',/ _::_::_ \\ _    _/ _::_::_ \\   `.,'.,`., \\-,-,-,_,_,<br>   `'~~ `'~~ `'~~ `'~~  \\(_)(_)(_)/  `~~' \\(_)(_)(_)/ ~'`\\_.._,._,'_;_;_;_;_;"
	}],
	[{
		name: "Enemy 3",
		id: "e0",
		body: data.enemyBodies[2],
		armor: data.enemyArmors[2],
		weapon: data.enemyWeapons[2],
		ascii: "             \\                  /<br>    _________))                ((__________<br>   /.-------./\\\\    \\    /    //\\.--------.\\<br>  //#######//##\\\\   ))  ((   //##\\\\########\\\\<br> //#######//###((  ((    ))  ))###\\\\########\\\\<br>((#######((#####\\\\  \\\\  //  //#####))########))<br> \\##' `###\\######\\\\  \\)(/  //######/####' `##/<br>  )'    ``#)'  `##\\`->oo<-'/##'  `(#''     `(<br>          (       ``\\`..'/''       )<br>                     \\''(<br>                      `- )<br>                      / /<br>                     ( /\\<br>                     /\\| \\<br>                    (  \\<br>                        )<br>                       /<br>                      (<br>                      `   Ed Zahurak"
	}],
	[{
		name: "Enemy 4",
		id: "e0",
		body: data.enemyBodies[3],
		armor: data.enemyArmors[3],
		weapon: data.enemyWeapons[3],
		ascii: "              /|                                           |\\<br>             /||             ^               ^             ||\\<br>            / \\\\__          //               \\\\          __// \\<br>           /  |_  \\         | \\   /     \\   / |         /  _|  \\<br>          /  /  \\  \\         \\  \\/ \\---/ \\/  /         /  /     \\<br>         /  /    |  \\         \\  \\/\\   /\\/  /         /  |       \\<br>        /  /     \\   \\__       \\ ( 0\\ /0 ) /       __/   /        \\<br>       /  /       \\     \\___    \\ \\_/|\\_/ /    ___/     /\\         \\<br>      /  /         \\_)      \\___ \\/-\\|/-\\/ ___/      (_/\\ \\      `  \\<br>     /  /           /\\__)       \\/  oVo  \\/       (__/   ` \\      `  \\<br>    /  /           /,   \\__)    (_/\\ _ /\\_)    (__/         `      \\  \\<br>   /  '           //       \\__)  (__V_V__)  (__/                    \\  \\<br>  /  '  '        /'           \\   |{___}|   /         .              \\  \\<br> /  '  /        /              \\/ |{___}| \\/\\          `              \\  \\<br>/     /        '       .        \\/{_____}\\/  \\          \\    `         \\  \\<br>     /                ,         /{_______}\\   \\          \\    \\         \\<br>                     /         /{___/_\\___}\\   `          \\    `<br><br>                         Adrian Elhart"
	}]
];
	
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

data.levels = [ // code % 2741 gives the most recent unlock, I can get a better algorithm later
	{name: "Grandma's basement", unlock: 1},
	{name: "School fair", unlock: 2},
	{name: "Catastrophic failure!", unlock: 3},
	{name: "AI", unlock: 4},
	{name: "Uprising", unlock: 5},
	{name: "Sergeant Dan", unlock: 6}
];
