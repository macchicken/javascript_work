//Class is in Session
//Dog constructor ensures that the Dog prototype has a breed property
function Dog (breed) {
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark=function(){
    console.log("Wooooooo");
};
snoopy.bark();
Dog.prototype.bark = function() {//add a method to a class such that all members of the class can use it
  console.log("Woof");
};
snoopy.bark();


//It's All in the Genes, inheritance
// create your Animal class here
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};
// create a Penguin constructor here, we could use var Penguin=Animal as well,it's totally the same
function Penguin(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
// create a sayName method for Penguins here
Penguin.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

function Penguin1(name){
    this.name=name;
    this.numLegs=2
}
// set its prototype to be a new instance of Animal,inherits properties and methods from Animal
Penguin1.prototype=new Animal();

// our test code
var theCaptain = new Penguin("Captain Cook", 2);
theCaptain.sayName();
var penguin=new Penguin1("Barry");
console.log(penguin.numLegs);
penguin.sayName();



//the prototype chain
// original classes
function Animal2(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.isAlive = true;
}
function Penguin2(name) {
    this.name = name;
    this.numLegs = 2;
}
function Emperor2(name) {
    this.name = name;
    this.saying = "Waddle waddle";
}

// set up the prototype chain
Penguin2.prototype = new Animal2();
Emperor2.prototype = new Penguin2();

var myEmperor = new Emperor2("Jules");

console.log( myEmperor.saying ); // should print "Waddle waddle"
console.log( myEmperor.numLegs ); // should print 2
console.log( myEmperor.isAlive ); // should print true



//Private Methods
//Accessing Private Variables and function
function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller=function(){
       return returnBalance;
   }
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance);
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance);



//cash register
function StaffMember(name,discountPercent){
    this.name=name;
    this.discountPercent=discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Barry",20);

var cashRegister = {
    total:0,
    lastTransactionAmount:0,
    add: function(itemCost) {
        this.lastTransactionAmount=itemCost;
        this.total+=itemCost;
    },
    scan: function(item,quantity) {
        switch (item) {
        case "eggs": this.add(0.98*quantity); break;
        case "milk": this.add(1.23*quantity); break;
        case "magazine": this.add(4.99*quantity); break;
        case "chocolate": this.add(0.45*quantity); break;
        }
    },
	//void LastTransaction
    voidLastTransaction: function(){
        this.total-=this.lastTransactionAmount;
		this.lastTransactionAmount=0;
    }
	applyStaffDiscount : function(employee){
        this.total*=((100-employee.discountPercent)/100);
    }
};

// scan each item 4 times
cashRegister.scan("eggs",1);
cashRegister.scan("milk",1);
cashRegister.scan("magazine",1);
cashRegister.scan("chocolate",4);
cashRegister.voidLastTransaction();
cashRegister.scan("chocolate",3);
cashRegister.applyStaffDiscount(me);

//Show the total bill
console.log('Your bill is '+cashRegister.total);