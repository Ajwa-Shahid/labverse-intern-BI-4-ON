// intro to arrays 
// reference type (all references are objects in JS)
// how to create arrays

// ordered collection of items 


//We can store anything in array of any data types
let mixed=[1,2,3,"Ajwa",0.4,34, null, undefined];
console.log(mixed);

let numbers=[1,2,3,4,5,6,7,8];
console.log(numbers);

let fruits=["Mango", "PineApple", "Apple", "Coconut"];
console.log(fruits);
console.log(fruits[1]);

//Array data updation
fruits[2]="Pomegranate";
console.log(fruits);

//Arrays is a reference type(object)
console.log(typeof fruits);           //object

//how to check IsArray by name of Array as typeof shows Array is object
console.log(Array.isArray(fruits));   //true

//Object Literal

let fruit=["Mango", "PineApple", "Fruity", "Coconut"];
let obj={};   
console.log(typeof obj);           //object
console.log(typeof fruits);         //object    both arrays and objects are of object type
console.log(Array.isArray(fruits));  //true as it's array
console.log(Array.isArray(obj));      //false as it's object