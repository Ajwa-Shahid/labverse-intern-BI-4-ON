// for in loop in array (less use) (gives indexes numbers)


const Fruits=["Apple","Mango","Banana"]; 

//to print indexes
for(let index in Fruits){
    console.log(index); 
}

//to print Elements 
for(let index in Fruits){
    console.log(Fruits[index]); 
}

//Cloning
Fruits2=[];
for(let index in Fruits){
    Fruits2.push((Fruits[index])); 
}
console.log(Fruits2);