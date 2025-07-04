// Hoisting 
// Hoisting allows you to call a function before it is defined in the code.

//1
sayHello();       // Hoisting is only possible in case of function declaration

function sayHello(){
    console.log("Hello, World!");
}

//2
// sayHello2();    not possible to call function expression before it is defined                

const sayHello2 = function(){
    console.log("Hy Girl!");
}

//3
//sayHello3();     not possible to call arrow function before it is defined

const sayHello3 = () => console.log("Hy Ajwa!");


//4

console.log(Variable);  
let Variable = " 19 July";
console.log(Variable);     //it'll give undefined but if we define variable by let or const it'll give error: Cannot access 'Variable' before initialization