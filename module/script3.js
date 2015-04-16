// Example of a for loop:
for (var counter = 1; counter < 11; counter++) {
	console.log(counter);
}
for (var i = 10; i >= 0; i-=1) {
	console.log(i);
}

// Any time you see data surrounded by [ ], it is an array. 
// can store different data types at the same time
// You are now declaring an array.
// Arrays are an awesome data structure!
var junk = ["Barry","Chen",28,1985];
console.log(junk);
var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);
// Let's print out every element of an array using a for loop
var cities = ["Melbourne", "Amman", "Helsinki", "NYC","Sydney","London","ShenZhen"];
for (var i = 0; i < cities.length; i++) {
    console.log("I would like to visit " + cities[i]);
}
// Click on "Stuck? Get a hint!" if you get stuck!
var names=["Ray","Michelle","Cathy","Barry","Chen"];
for (var i=0;i<names.length;i++){
    console.log("I know someone called "+names[i]);
}


/*jshint multistr:true */
text = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";
var myName = "Eric";
var hits = [];
// Look for "E" in the text
for(var i = 0; i < text.length; i++) {
	if (text[i] === "E") {
		// If we find it, add characters up to
		// the length of my name to the array
		for(var j = i; j < (myName.length + i); j++) {
			hits.push(text[j]);
		}
	}
}
if (hits.length === 0) {
	console.log("Your name wasn't found!");
} else {
	console.log(hits);
}


/*jshint multistr:true */
var text="Ray Michelle Barry Cathy Eric Jason Yumi Barrier Randy \
Sohpie Peter Sccott Barry Gary Laurie Lee";
var myName="Barry";
var hits=[];
var len=text.length;
var temp="";
var myNameLen=myName.length;
for (var i=0;i<len;i++){
    if (text[i]===myName[0]){
        if (myName===text.slice(i,myNameLen+i)){
            hits.push(myName);
        }
    }
}
if (hits.length===0){
    console.log("Your name wasn't found!");
}else{
    console.log(hits);
}


var coinFace = Math.floor(Math.random() * 2);
while(coinFace === 0){
	console.log("Heads! Flipping again...");
	var coinFace = Math.floor(Math.random() * 2);
}
console.log("Tails! Done flipping.");

//Remember to set your condition outside the loop!
var condition=0;
var loop = function(){
	while(condition<3){
		//Your code goes here!
		console.log("I'm looping!");
		condition++;
	}
};
loop();

var getToDaChoppa = function(){
  // Write your do/while loop here!
  var condition=false;
  do{
     console.log("mny choice is orange"); 
  }while(condition)
};
getToDaChoppa();


//Dragon Slayer
var slaying=true;
var youHit=Math.floor(Math.random() * 2);
var damageThisRound=Math.floor(Math.random()*5 + 1);
var dragonDamage=Math.floor(Math.random()*6 + 1);
var totalDamage=0;
var myHealth=9;
var healingCount=0;

while(slaying){
    if (youHit){
        if (totalDamage>=12){
            slaying=false;
            console.log("you slew the drange!")
        }else{
            console.log("damange done to the dragon is "+damageThisRound);
            totalDamage+=damageThisRound;
            damageThisRound=Math.floor(Math.random()*5 + 1);    
        }
    }else{
        myHealth-=dragonDamage;
        console.log("you are hit by the drange "+dragonDamage);
        if (healingCount<3){
            heal=prompt("heal youself by 5?");
            if (heal==="yes"){
                myHealth+=5;
                healingCount++;
                if (myHealth>9){myHealh=9;}
            }
        }
        if (myHealth<=0){
            slaying=false;
            console.log("the dragon defeated you!");
        }
        dragonDamage=Math.floor(Math.random()*6 + 1);
    }
    youHit=Math.floor(Math.random() * 2);
}



var isEven = function(number) {
  // Your code goes here!
  if (isNaN(number)){
      return "the input isn't a number at all";
  }
  else if (number%2===0){
      return true;
  }else{
      return false;
  }
};
console.log(isEven("42"));

var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  case 'yellow':
    console.log("That's fine to me")
    break; 
  default:
    console.log("I don't think that's a primary color!");
}