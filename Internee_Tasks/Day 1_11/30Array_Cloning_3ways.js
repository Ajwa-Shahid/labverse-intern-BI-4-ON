// how to clone array 

// how to concatenate two arrays

let Array1=["item1","item2","item3"];
let Array2=Array1;

console.log(Array1===Array2);  // true as will be same as pointer of both Arrays will have same Address of same single Array


//Cloning of Array using slice() jismein jhan sy jonsa index put krein woh whan sy last index tk ki values ko print kr deta hai

//Not better way
Array1=["item0","item1","item2"];
Array2=["item0","item1","item2"];  //It's not a better way to clone an array
console.log(Array1===Array2);    //false as two separate occupying Arrays 

//Better way
Array1=["item0","item1","item2"];
Array2=Array1.slice(0);
console.log(Array1, Array2);
console.log(Array1===Array2);  //noow both arrays are clone of each other means taking separate spaces



//Cloning of Array using ConCatenation

Array1=["item0","item1","item2"];
// Array2=Array1.slice(0);
Array2=[].concat(Array1);     //[] yani khali array bn jyy gi usmein array1 ko add krdena
console.log(Array1, Array2);
console.log(Array1===Array2);


//Cloning of Array using Spread Operator

Array1=["item0","item1","item2"];
// Array2=Array1.slice(0);
//Array2=[].concat(Array1);
Array2=[...Array1];               //mostly useable way even in react as well but better is slice one 
console.log(Array1, Array2);
console.log(Array1===Array2);

// OR
Array1=["item0","item1","item2"];
Array2=["item3","item4","item5"];
Array3=[...Array1, ...Array2];

console.log(Array1, Array2, Array3);
console.log(Array1===Array2);

console.log("Hello");

// Task: Add extra items in Cloned Array

Array1=["item0","item1","item2"];
Array2=Array1.slice(0).concat(["item3", "item4","item5"]);
            
console.log(Array1, Array2);
console.log(Array1===Array2);


// OR

Array1=["item0","item1","item2"];

Array2=[].concat(Array1,["item6","item7"]);
console.log(Array1, Array2);
console.log(Array1===Array2);


//OR

Array1=["item0","item1","item2"];

Array2=[...Array1, "item8", "item9"]
console.log(Array1, Array2);
console.log(Array1===Array2);



