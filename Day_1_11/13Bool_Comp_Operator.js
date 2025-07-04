// booleans & comparison operator 

// booleans 
// true, false 

//   >,<,>=,<=

let num=2;
let Num=2;
console.log(num>Num);    //false
console.log(num>=Num);   //true

let num1=12;
let num2=13;
console.log(num1>num2);  //false
console.log(num1<num2);  //true

//Booleaan Variable

let age=16;
let isAdult=false;
console.log(isAdult);
age=20;
isAdult=true;
console.log(isAdult, typeof isAdult);



// == vs === 

let Numb1=19;
let Numb2=19;

console.log(Numb1 == Numb2);   //true

Numb1="19";
Numb2=19;

console.log(Numb1 == Numb2);   //true  cuz (double == to ) hmari value check kry ga data type ni, but if u want ky value ky sath data type bhi check ho toh usky liye (===) use krein gein
console.log(Numb1 === Numb2);  //false as diff data type


// != vs !==

let num_1=7;
let num_2=7;
console.log(num_1!=num_2);   //false as both are equal

num_1=8;
num_2=7;
console.log(num_1!=num_2);   //true as both are not equal

num_1="8";    
num_2=8;
console.log(num_1 != num_2);   //false aik string hai aik num hai but yeh keh rha hai dono alag alag nii hein yani it's not looking data type are not separate or different yani dono same hein num_1 = num_2 so false it's not checking data type
                             //In short, it sees value not Data type

console.log(num_1 !== num_2);    // true, sees value and Data type both                           