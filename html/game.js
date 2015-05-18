var Warrior = function(name, magic, weapon, health){
 this.health = health;
 this.name= name;
 this.magic= magic;
 this.weapon= weapon;
}
var Magic = function(name, damage){
 this.name= name;
 this.damage= damage;
}
var Weapon = function(name, description, damage){
 this.name= name;
 this.damage= damage;
 this.description = description;
}
var Attack = function(name, description, damage){
  this.name= name;
  this.description= description;
  this.damage= damage;
}
var Temple = function(name, description, enemy){
  this.name= name;
  this.description= description;
  this.enemy= enemy;
}
var Enemy = function(name, weapon, health){
  this.name= name;
  this.weapon= weapon;
  this.health= health;
}

var answer, userName, weaponChoice, weapon, userTemple;

var useWeapon = function(){
  var randomDamage = 10 + Math.floor(Math.random() * 100);
  userTemple.enemy.health -= randomDamage;
  if(userTemple.enemy.health <= 0){
    userTemple.enemy.health = 0;
    alert("Congratulations! You have killed " + userTemple.enemy.name + "!")
  }
  var enemyHealthText = document.getElementById("enemyHealthText");
  enemyHealthText.textContent = userTemple.enemy.health;
};

var chooseRandom = function(array){
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

userName = prompt("What shall you be called?");
weaponChoice = prompt("Choose your weapon! 1 = Sword, 2 = Bow, 3 = Hammer.");

var sword = new Weapon("The Sword of Time", "The Master Sword is a sacred blade which evil ones may never touch.... Only one worthy of the title of \"Hero of Time\" can pull it from the Pedestal of Time....", 20);
var bow   = new Weapon("The Elven Bow", "This treasure of the Gorons is said to have once belonged to a Hero from the past. It never misses its target!", 30);
var hammer= new Weapon("The Hammer of Drethis", "A long time ago there was an evil dragon named Volvagia living in Death Mountain. This dragon was very terrifying, and destroyed everyone in his path! Using a huge hammer, the Hero of Time destroyed the dragon and freed the Goron nation.", 40);
var firebreath= new Weapon("Firebreath", 30);

if(weaponChoice == 1){
  weapon = sword;
}
else if(weaponChoice == 2){
  weapon = bow;
}
else {
  weapon = hammer;
}

var red   = new Magic("Red Potion", 10);
var blue  = new Magic("Blue Potion", 20);

var user  = new Warrior(userName, blue, weapon, 500 + Math.floor(Math.random() * 100));
var dlink = new Enemy("Dark Link", hammer, 500 + Math.floor(Math.random() * 100));
var volvagia = new Enemy("Volvagia", firebreath, 500 + Math.floor(Math.random() * 100));
var phantom = new Enemy("Phantom Ganon", bow, 500 + Math.floor(Math.random() * 100));

var fire  = new Temple("Fire Temple", "The sky near the mountain is blurred with smoke and ashes, and the summit is very violent and active. It's time to find out the source of its strange activity.", volvagia );
var water = new Temple("Water Temple", "Underneath Lake Hylia is the Water Temple. It is perplexing, tricky, and an all-around difficult place to navigate through. Many puzzles and dangers await you, so be prepared to act quickly.", dlink);
var forest = new Temple("Forest Temple", "Deep within the Sacred Forest Meadow in the Lost Woods lies the mansion-like Forest Temple, inhabited by many fierce foes.", phantom);

var temples = [fire, water, forest];


alert("Greetings "+ user.name + "! Your weapon is "+ user.weapon.name + "! " + user.weapon.description + " Now, let us begin our adventure!");
userChoice = confirm("Impa: \"" + user.name + "! The princess Zelda has just been captured by the Dark Lord, Ganondorf! Will you rescue her?\"");

if(userChoice == true){
  alert("I knew you were the one! The Hero of Time!");
}
else{
  alert("But I thought you were the Hero of Time! Quit fooling around!");
}

userChoice = confirm("After a long and perilous journey accross the land of Hyrule, you arrive at a portal. There is no knowing where you will end up, but you must travel throught the portal to reach princess Zelda! Are you ready?");

if(userChoice == true){
  alert("Step through the doorway, brave " + user.name + "!");
}
else{
  alert("As you made a run for it... you tripped on a rock, and fell into the portal anyway. What bad luck!");
}

userTemple = chooseRandom(temples);

alert("As you regain your focus, you see that you have now stumbled into the " + userTemple.name + "! " + userTemple.description);

userChoice = confirm("You find yourself facing a large, heavy door! Inside, you hear a scream... It sounds somewhat familiar! Do you dare enter?")

if(userChoice == true){
  alert("Prepare your weapon!");
}
else{
  alert("Oh no! The dungeon caved in behind you and the door is your only way out! Bad luck I guess!");
}

alert("Walking in, you see two figures. One is Princess Zelda, chained to the wall, and the other figure is the ruler of the " + userTemple.name + ", " + userTemple.enemy.name + "!");

alert("You must save Zelda! The battle begins! " + userTemple.enemy.name + " has a health of  " + userTemple.enemy.health + "! Your weapon, " + user.weapon.name + " deals " + user.weapon.damage + " damage! Your health is at " + user.health + "! After you attack, " + userTemple.enemy.name + " will try and attack you.");

