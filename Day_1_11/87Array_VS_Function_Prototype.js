const numbers = [1,2,3,4,5];
//numbers.   all of these functions by writing numbers. are coming fro it's protype but Only Functions has prototype
// Internally JS Array Creation (using Array constructor with new keyword):

let Numbers = new Array(1,2,3,4,5);  //this Array constructor func's prototype has array all methods 
console.log(Array.prototype);        //this has all those functions

console.log(Object.getPrototypeOf(numbers));  //its giving empty [] Array, Array prototype is Array

function hello(){
    console.log("Hy, Hello, Annyoung");
}
console.log(hello.prototype);                 //its giving empty {} object, Func protype is empty obj

// WE can change the prototype 

hello.prototype= [];
console.log(hello.prototype);

//now can treat function's prototype as Array

hello.prototype.push(1);
console.log(hello.prototype);