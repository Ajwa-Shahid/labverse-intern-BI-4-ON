// for of loop in array  (mostly used)

const Fruits=["Apple","Mango","Banana"];   //Plular: Array name  , Singular: Variable name 

for(let fruit of Fruits){   // will run till the length of Array, 1st time loop run fruit var mein Apple ay ga, 2nd time py mango and so on
    console.log(fruit);
}

//to Upper Case

for(let fruit of Fruits){   
    console.log(fruit.toUpperCase());
}

// Cloning into empty Array

const Array1=[1,2,3,4,5];
const Array2=[];

for(let arr of Array1){
    Array2.push(arr);
}

console.log(Array2);