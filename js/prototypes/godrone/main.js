// GoDrone
//
// Going back to the slots mechanic
// You have a number of slots that you can attach various objects into
// These objects do things automatically without intervention
// 1. Guns that do damage each turn
// 2. Factories that create ships to send on to the battlefield
// 3. Repair stations that heal damaged units
// 4. Upgrade stations that improve existing units
// 5. Anything else you can think of
//
// Additional mechanics ideas
// 1. Common card pool? - you don't get your own deck, you and your opponent select from the same group of cards
//    - We could take it one step further and make it the entire card pool
// 2. Lanes - The battle is fought along 3 lanes (like LoL), like 3 mini battles
// 3. Winning - The game is won when all your opponent's objects have been destroyed
// 4. Hidden information - Backup objects are hidden until they enter play
//    - When an object is destroyed, a new object will automatically take its place
//    - A player can manually destroy his own object to allow the backup to take over
// 5. Resource allocation - You have energy/resources to spend and get to decide how they are distributed each turn
//    - Your slotted objects can only activate if they have enough resource allocation

// Proposed gameplay
// 
// To start game, take 2 objects from the object pile
// A turn consists of:
// 1. One energy to each of your three objects (none to start the game)
// 2. You may place/replace any objects into slots or behind other objects
//    - When this happens any stored energy gets transferred to the new object
//    - empty slots cannot store energy
// 3. Objects full of energy get activated
// 4. Any stuff on the battlefield gets activated
// 5. Battle ends and turn ends
//
//
//
//
//