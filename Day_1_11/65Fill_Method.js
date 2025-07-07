// fill method 
// value , start , end 

//Task: Make Array of length 10 with each element as -1

const Array_10_elements = new Array(10).fill(-1);   //Array(10) is a constructor 
console.log(Array_10_elements); 

//Task: replace 5,6,7 from 0 in an Array

const replace_Array = [1,2,3,4,5,6,7,8,9];
replace_Array.fill(0, 4, 7);     //will change above array 
console.log(replace_Array);