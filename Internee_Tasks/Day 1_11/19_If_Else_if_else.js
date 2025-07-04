// if 
// else if 
// else if 
// else if 
// else 

//agr aik condition true ho jyy toh dusri check ni hogi aisy

const prompt = require("prompt-sync")();

let tempInDegree=+prompt("Enter Temprature: ");
console.log(tempInDegree);

if(isNaN(tempInDegree)){
     console.log("Please enter a valid number.");
}
else if(tempInDegree < 0){
    console.log("extremely cold outside");
}else if(tempInDegree < 16){
    console.log("It is cold outside");
}else if(tempInDegree < 25){
    console.log("wheather is okay ");
}else if(tempInDegree < 35){
    console.log("lets go for swim");
}else if(tempInDegree < 45){
    console.log("turn on AC");
}else{
    console.log("too hot!!");
}

console.log("hello");




let day = 7; 


if(day === 0){
    console.log("Sunday");
}else if(day ===1){
    console.log("Monday");
}else if(day ===2){
    console.log("Tuesday");
}else if(day ===3){
    console.log("Wednesday");
}else if(day ===4){
    console.log("Thrusday");
}else if(day ===5){
    console.log("Friday");
}else if(day ===6){
    console.log("Saturday");
}else{
    console.log("Invalid Day");
}