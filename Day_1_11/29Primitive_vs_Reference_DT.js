// primitve vs reference data types

let num1=6;
let num2=num1;
console.log("Value of num1 is ", num1);
console.log("Value of num2 is ", num2);
num1++;                                    

console.log("after incrementing num1");
console.log("Value of num1 is ", num1);
console.log("Value of num2 is ", num2);         //num2 value will not updated

//reference Types (objects) always use const to define them, all reference types(Arrays,Objects,etc) stores in the same way in memory

let Array1=["item1", "item2","item3"]
let Array2=Array1;
console.log(Array1);
console.log(Array2);

Array1.push("item4");

console.log("After pushing an Element");
console.log("Array 1 is: ", Array1);
console.log("Array 2 is: ", Array2);         //Array2 will be updated 