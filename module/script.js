//  === Equal to
//  !== Not equal to

confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');
// 1. prompt("What is your name?");
// 2. prompt("What is Ubuntu?");
prompt("where are u from?");
"i'm coding like a champ".length>10
console.log(2*5)
console.log("hello")

// Here is an example of using the greater than (>) operator.
console.log(15 > 4); // 15 > 4 evaluates to true, so true is printed.

// Fill in with >, <, === so that the following print out true:
console.log("Xiao Hui".length < 122);
console.log("Goody Donaldson".length > 8);
console.log(8*2 === 16);

if ( "BarryChen".length >= 7) {
    console.log( "You have a long name");
}

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

// Below is an example of printing the remainder of 18/4 using modulo:
// console.log(18 % 4);
console.log(14%3);
console.log(99%8);
console.log(11%3);

// Be careful with the substring's letter positions!
"wonderful day".substring(3,7)
// Use console.log( ) to print out the substrings.
// Here is an example of the 1st to 4th letter of "JavaScript":
// console.log("JavaScript".substring(0,4));
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,12));
console.log("Hamburgers".substring(3,10))


// To create a variable, we use only one equals sign
// But to check if two values are equal, we use 3 equal signs.

// declare your variable here:

var myAge=28
console.log(myAge)
// Declare a variable on line 3 called
// myCountry and give it a string value.
myCountry="China"

// Use console.log to print out the length of the variable myCountry.
console.log( myCountry.length);

// Use console.log to print out the first three letters of myCountry.
console.log( myCountry.substring(0,3));
// On line 2, declare a variable myName and give it your name.
var myName="Barry";
// On line 4, use console.log to print out the myName variable.
console.log(myName);
// On line 7, change the value of myName to be just the first 2 
// letters of your name.
myName=myName.substring(0,2);
// On line 9, use console.log to print out the myName variable.
console.log(myName);



//Choose Your Own Adventure
// Check if the user is ready to play!
confirm("are you ready to play?");
var age = prompt("what's your age?");
if (age<13){
    console.log("you are allowd to play but we take no responsibility!");
}else{
   console.log("good luck and have fun");
}
console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Do you want to race Bieber on stage?");
if (userAnswer==="yes"){
    console.log("You and Bieber start racing. It's neck and neck! You win by a shoelace!");
}else{
    console.log("Oh no! Bieber shakes his head and sings 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("how do you rate the game?(0-10)");
if (feedback>8){
    console.log("Thank you! We should race at the next concert!")
}else{
    console.log("I'll keep practicing coding and racing.");
}
	
	
// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(9);


// Below is the greeting function!
// See line 7
// We can join strings together using the plus sign (+)
// See the hint for more details about how this works.

var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

// On line 11, call the greeting function!
greeting("Barry");

// Write your function below. 
// Don't forget to call your function!
var sleepCheck=function(numHours){
    if (numHours>=8){
        return "You're getting plenty of sleep! Maybe even too much!";
    }else{
        return "Get some more shut eye!";
    }
}
console.log(sleepCheck(10));
console.log(sleepCheck(8));
console.log(sleepCheck(5));



var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare=function(choice1,choice2){
    if (choice1==choice2){
        return "The result is a tie!";
    }else if (choice1==="rock"){
        if (choice2==="scissors"){
            return "rock wins";
        }else{
            return "paper wins";
        }
    }else if (choice1==="paper"){
        if (choice2==="rock"){
            return "paper wins";
        }else{
            return "scissors wins";
        }
    }else{
        if (choice2==="rock"){
            return "rock wins"
        }else{
            return "scissors wins"; 
        }
    }
}
console.log("userChoice "+userChoice);
console.log("computerChoice "+computerChoice);
console.log(compare(userChoice,computerChoice));