// use const for creating array


// heap memory ["Apple", "Mango","Banana"] 0x11
const Array1=["Apple","Mango","Banana"];
Array1.push("Pomegranate");       //push at -> 0x11
console.log(Array1);

// Array1=["Chilii","Milli"];     //It'll give error reassignment to constant array so we'll use push,pop,unshift,shift functions to update array, but if let was used instead of const then we can reassign the Array1


//const is preferable to define Ararys

let Array2=["item1","item2","item3"];
Array2=[];   //left it empty
Array2.push("Item0");
console.log(Array2);