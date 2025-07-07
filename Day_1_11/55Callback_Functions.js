// callback functions (High order Functions)
//koi function as an argument koi fuction ly  and usy call kr dy 

function myFunction(A){
    console.log(A); 
}

myFunction([1,2,3,4,5]);  //Array passed
myFunction("Ajwa");      //String passed
myFunction(123);      //number passed
myFunction({name: "Ajwa", age: 20, gender:"Female"});   //Object passed

//Can the value of A be a function?

function argumentFunction (){
    console.log("I am a function passed as an argument");
}

myFunction(argumentFunction());  //internal body of function passed
myFunction(argumentFunction);  //to pass whole function as it is 



//Callback function example

function callbackFunction(callBack){              //callBack is a function
    console.log("This is a callback function");
    callBack();
}

function argument_Function(){
    console.log("I'm a function passed as an Argument");
}

callbackFunction(argument_Function);

//Callback function example

function Argument_Function(name){
    console.log("It's function passed as an Argument");
    console.log(`Hello ${name}`);
}

function Callback_Function(callBack){
    console.log("It's a callback function");
    callBack("Salar");
}

Callback_Function(Argument_Function);