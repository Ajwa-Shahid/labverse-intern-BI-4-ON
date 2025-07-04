// ternary operator / conditional operator

let age = 14;
let drink;

if(age>=5){
    drink = "coffee";
    console.log(drink);
}else{
    drink = "milk";
    console.log(drink);
}

//we can use Ternary Operator instead of this
//? checks condition 1st string will store in drink if true otherwise if false then 2nd string will store in drink
age=6;
drink= age>=15 ? "Coffee" : "Milk";
console.log(drink);
