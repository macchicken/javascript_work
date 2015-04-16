var computer = function(){
	var computerChoice = Math.random();
	if (computerChoice < 0.34) {
		computerChoice = "rock";
	} else if(computerChoice <= 0.67) {
		computerChoice = "paper";
	} else if (computerChoice<=0.9){
		computerChoice = "scissors";
	}else{
		computerChoice = "Rope";
	}
	return computerChoice;
}

var compare=function(choice1,choice2){
    if (choice1===choice2){
        return "1";
    }else if (choice1==="Rope"||choice2==="Rope"){
		return "Rope wins";
	}
	else if (choice1==="rock"){
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

var playGame = function(){
	var userChoice = prompt("Do you choose rock, paper , scissors or Rope?");
	if (userChoice!="rock"&&userChoice!="paper"&&userChoice!="scissors"&&userChoice!="Rope"){
		userChoice=computer();
	}
	var computerChoice=computer();
	var result=compare(userChoice,computerChoice);
	console.log("userChoice "+userChoice);
	console.log("computerChoice "+computerChoice);
	return result;
}

var result=playGame();
if (result==="1"){
	console.log("firt round is a tie,play again.")
	result=playGame();
}
if (result==="1"){
	result="The result is a tie!";
}
console.log(result);