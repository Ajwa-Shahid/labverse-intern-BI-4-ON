// for loop in array 

let Fruits=["Apple","Mango","Banana","Grapes"];

for(let i = 0; i<=Fruits.length-1; i++){
        console.log(Fruits[i]);
}

//Print in Upper Case

for(let j = 0; j<=Fruits.length-1; j++){
        console.log(Fruits[j].toUpperCase());
}


//Cloning Arrays 

Fruits=["Apple","Mango","Banana","Grapes"];
let Fruits2=[];

for(let i = 0;i<=Fruits.length-1;i++){
      Fruits2.push(Fruits[i].toUpperCase());
}

console.log(Fruits, Fruits2);