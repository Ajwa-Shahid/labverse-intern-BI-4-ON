//BigInt  (there's a linit to Integers after that they rounds to their nearest value)
let myNumber= 123;
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);//it tells how much biggest number you can store (9007199254740991) if u wanna store more big integer from it then we use BigInt

let my_number= BigInt(90071992547409914857348927523890723);
console.log(my_number);

let sec_number=12n; //12n is also representing BigInt
console.log(sec_number);

console.log(myNumber + sec_number);  //Error:Cannot mix BigInt and other types
console.log(my_number + sec_number);