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

var answer, storyLine, userName, weaponChoice, weapon, userTemple, userHealthText, enemyHealthText, randomMiss;

//This is what would show in the Article Element (Blue background)//
storyLine = document.getElementById("storyLine");

//Function of user using weapon//
var useWeapon = function(){
  var randomDamage = 10 + Math.floor(Math.random() * 100);
  if (randomMiss > 0.5) {
  userTemple.enemy.health -= randomDamage;
  alert("You hit " + userTemple.enemy.name + "!");

    if(userTemple <= 0){
    userTemple.enemy.health = 0;
    alert("Congratulations! You have killed " + userTemple.enemy.name + "!")
  }


  else{
    enemyAttack();
  }

enemyHealthText = document.getElementById("enemyHealthText");
  enemyHealthText.textContent = userTemple.enemy.health;
userHealthText = document.getElementById("userHealthText");
  userHealthText.textContent = user.health;
};

//Function of the enemy's attack//
var enemyAttack = function(){
  var randomDamage = 10 + Math.floor(Math.random() * 100);
  randomMiss = Math.random();
if(randomMiss > 0.5 ){
user.health -= randomDamage;
alert("You got hit!");
}
  if(user.health <= 0){
    user.health = 0;
    alert("You Just Died!")
  }
}

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
//MAGIC VARIABLES//
var red   = new Magic("Red Potion", 10);
var blue  = new Magic("Blue Potion", 20);

//USERS//
var user  = new Warrior(userName, blue, weapon, 500 + Math.floor(Math.random() * 100));

//ENEMY VARIABLES//
var dlink = new Enemy("Dark Link", hammer, 500 + Math.floor(Math.random() * 100));
var volvagia = new Enemy("Volvagia", firebreath, 500 + Math.floor(Math.random() * 100));
var phantom = new Enemy("Phantom Ganon", bow, 500 + Math.floor(Math.random() * 100));

//WEAPON VARIABLES//
var fire  = new Temple("Fire Temple", "The sky near the mountain is blurred with smoke and ashes, and the summit is very violent and active. It's time to find out the source of its strange activity.", volvagia );
var water = new Temple("Water Temple", "Underneath Lake Hylia is the Water Temple. It is perplexing, tricky, and an all-around difficult place to navigate through. Many puzzles and dangers await you, so be prepared to act quickly.", dlink);
var forest = new Temple("Forest Temple", "Deep within the Sacred Forest Meadow in the Lost Woods lies the mansion-like Forest Temple, inhabited by many fierce foes.", phantom);

//TEMPLES//
var temples = [fire, water, forest];
userTemple = chooseRandom(temples);

