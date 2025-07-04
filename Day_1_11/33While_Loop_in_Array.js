// while loop in array (less use)

const Fruits=["Apple","Mango","Banana"];

let i = 0;
while(i<Fruits.length){
    console.log(Fruits[i]);
    i++;
}

//Print in Upper Case

let k=0;
while(k<Fruits.length){
    console.log(Fruits[k].toUpperCase());
    k++;
}

//Cloning Array1 into Empty Array2 

const Array1 = [1,2,3,4,5,6,7,8,9,10];
const Array2 = [];

let j = 0;
while(j < Array1.length){
    Array2.push(Array1[j]); j
    j++;
}

console.log("Original:", Array1);
console.log("Cloned:  ", Array2);
