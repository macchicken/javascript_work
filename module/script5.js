/*
think of objects as combinations of key-value pairs (like arrays), only their keys don't have to be numbers like 0, 1, or 2: they can be strings and variables.
*/
var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};
phonebookEntry.phone();

var me = new Object();
me["name"]="Barry";
me.age=28
console.log(me.name);
console.log(me["age"]);

var object2={"carName":"Ford","color":"Red","carYear":8};
console.log(object2.carName);
console.log(object2["color"]);
console.log(object2.carYear);

var myOwnObject={weather:"warm and nice","year":35}
myOwnObject.place="SZ";
myOwnObject["province"]="GD";
myOwnObject.summary=function(){
    console.log(this["place"]+" is in "+object3.province+" year "+this.year+" and "+this.weather);
}
myOwnObject.summary();


var friends={};
friends.bill={firstName:"Bill",lastName:"Lee","number":1234567,
address:["First Road",28]
};
friends["steve"]={firstName:"Steve",lastName:"Chen","number":2345678,
address:["First Road",30]
};

var list = function(objList) {
    for (var prop in friends){
        console.log(prop);
    }
};
var search=function(name){
    for (var prop in friends){
        if (friends[prop].firstName===name){
            //console.log(friends[prop]);
            return friends[prop];
        }
    }
};
list(friends);
var result = search("Bill");
for (var prop in result){
    console.log(prop+": "+result[prop]);
}


//FizzBuzz
for (var i=1;i<=20;i++){
    fizz=i%3===0;
    buzz=i%5===0;
    if (fizz){
        if (buzz){
            console.log("FizzBuzz");
        }else{
            console.log("Fizz");
        }
    }else if (buzz){
        if (fizz){
            console.log("FizzBuzz");
        }else{
            console.log("Buzz");
        }
    }else{
        console.log(i);
    }
}
var getReview = function (movie) {
    switch(movie){
        case 'Toy Story 2':
            return "Great story. Mean prospector.";
            break;
        case "Finding Nemo":
            return "Cool animation, and funny turtles.";
            break;
        case "The Lion King":
            return "Great songs.";
            break;
        default:
            return "I don't know!";
    }
};

var square = new Object();
square.sideLength = 6;
square.calcPerimeter = function() {
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea=function(){
    return this.sideLength*this.sideLength;
}

var p = square.calcPerimeter();
var a = square.calcArea();
console.log(p);
console.log(a);

//object Custom Constructors
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275
var george = new Person("George Washington",275);
console.log(george.name);
console.log(george.age);

//object Constructors With Methods
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
      return this.height * this.width;
  };
  // put our perimeter function here!
 this.calcPerimeter = function(){
     return this.height*2+this.width*2;
 }
}

var rex = new Rectangle(7,3);
var area = rex.calcArea();
var perimeter = rex.calcPerimeter();
console.log("area is "+area);
console.log("perimeter is "+perimeter);


//Array of object
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
};
//Passing Objects into Functions
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy",6);

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter=function(){
        return 2*Math.PI*this.radius;
    }
};
var cir=new Circle(3);
console.log(cir.area());
console.log(cir.perimeter());


var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}
function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}
/*Create a search function
then call it passing "Jones"*/
var search=function(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
		if (contacts[i].lastName===lastName){
		    printPerson(contacts[i]);    
		}
	}
}
function add(firstName,lastName,email,phoneNumber){
    var newPerson={
        firstName:firstName,
        lastName:lastName,
        email:email,
        phoneNumber:phoneNumber
    };
    contacts[contacts.length]=newPerson;
}

add("Barry","Chen","log525lg100@aliyun.com","12345678910");
list();



// complete these definitions so that they will have
// the appropriate types
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log( typeof anObj ); // should print "object"
console.log( typeof aNumber ); // should print "number"
console.log( typeof aString ); // should print "string"


//hasOwnProperty
var suitcase = {
    shirt: "Hawaiian",
};
if (suitcase.hasOwnProperty("shorts")){
    console.log(suitcase.shorts);
}else{
    suitcase.shorts="JJ";
    console.log(suitcase.shorts);
}