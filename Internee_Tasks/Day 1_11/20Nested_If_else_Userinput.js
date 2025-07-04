
// nested if else

// Game: winning number 19 

// 19 your guess is right 
// 17 too low 
// 20 too high 


const prompt = require("prompt-sync")();
let winningNum=19;
let userinput = prompt("Guess a Number");   //It'll take input from user and will store in variable in the form of string
console.log(userinput, typeof userinput);
if(userinput==="19"){
    console.log("Your Guess is Too Accurate");
}else if(userinput<= "17"){             
    console.log("Your Guess is Too Low");
}else if(userinput>="20"){
    console.log("Your Guess is Too High");
}


//Nested
 winningNum = 19;
 userinput = prompt("Guess a Number: ");   // input is a string
 userinput = +prompt("Guess a Number");   //+ converted string to number OR 
 userinput = Number(userinput);              // convert to number OR
 console.log(userinput, typeof userinput);

 
if (isNaN(userinput)) {
    console.log("Please enter a valid number!");
}

if (userinput === winningNum) {
    console.log("Your Guess is Too Accurate");
} else{

    if (userinput <= 17) {
    console.log("Your Guess is Too Low");
    }else{
    console.log("Your Guess is Too High");
    }

}



//neat code Nested 

let winningNumber = 19;
let userGuess = +prompt("Guess a number: ");

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{

    if(userGuess < winningNumber){
        console.log("too low !!!");
    }else{
        console.log("too high !!!");
    }

}
