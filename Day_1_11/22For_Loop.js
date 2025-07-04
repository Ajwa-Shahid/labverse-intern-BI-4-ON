// For loop 
// Task: print 0 to 9

// using let

for (let i= 0; i<=9; i++){
    console.log(i);
}

// console.log(`"Value of i is ${i}`); // this i will be undefined cuz of let it'll be only defined in for loop
                                    //ReferenceError: i is not defined

// using var

for (var i= 0; i<=9; i++){
    console.log(i);
}

console.log(`"Value of i is ${i}`);  //i value will print now


//Task: Sum of Numbers

let sum=0;
for (let i= 0; i<=9; i++){
     sum+=i;
}
  console.log(`"Total Sum: ${sum}"`);