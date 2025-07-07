// function returning function (High Order Function)
// This function returns another function

function returnString(){
    return "Ajwa";
}
console.log(returnString());


function returnNumber(){
    return 1;
}
console.log(returnNumber());


function returnArray(){
    return [1,2,3,4,5];
}
console.log(returnArray());


function returnObject(){
    return {name:"Salar",age:"11" };
}
console.log(returnObject());


function returnBoolean(){
    return true;
}
console.log(returnBoolean());


function returnFunction() {
    return function() {
        console.log("Hello from the inner function!");
    };
}

const returns= returnFunction();
returns(); 

returnFunction()(); //Calling the inner function directly

//OR

function returnsFunction (){
    function Hello(){
        console.log("Hello I'm a returning function inside another function");
    };
    return Hello;
}

const Return= returnsFunction();
Return();

returnsFunction()(); //Calling the inner function directly

//OR

function returns_Function(){
    function Hello(){
        return "Hello Dear";
    }
    return Hello;
}

const Returns =returns_Function();
Returns(); //Calling the inner function, but it will not show returning value to show it use console.log or variable
console.log(Returns());

returns_Function()(); //Calling the inner function directly, but it will not show returning value to show it use console.log or variable
console.log(returns_Function()()); 