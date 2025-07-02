// array push pop  (Faster Functions) 

//push (will push data at the end of array)

let fruits = ["apple", "mango", "grapes"];
fruits.push("Banana");
console.log(fruits);

//pop (will pop (remove) data from the end of array and returns deleted data) fruits.pop();

console.log(fruits.pop());

let deletedData=fruits.pop();
console.log("Popped Fruit is" , deletedData);
console.log(fruits);



// Array shift unshift (less fast than push pop)

//unshift()    to add element on starting
fruits.unshift("Apple","Lychee");
console.log(fruits);

//shift()      to remove element from starting
let deleted_Fruit=fruits.shift();
console.log(deleted_Fruit);
console.log(fruits);