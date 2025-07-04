// Convert number to string. (No. + "") as (age + "")

let age=21;
console.log(age+"");  //will print 21 but wht's type of (age+"")
console.log(typeof age+"");  // will still show data type as number
console.log(typeof (age+"")); // will show string data type 22 -> "22"

// OR

age = age+"";
console.log(typeof (age));   //string
console.log(typeof age);     //string as () of age are not required 

// OR
let height=5.6;
height= String(height);
console.log(typeof height);  //string





// Convert string to number. (Add + before String) as (myString=+"19")

let myString="19";
console.log(typeof myString);  //String

let my_String=+"19";
console.log(typeof my_String);  //Number

let length=5.6;
length=Number(length);
console.log(typeof length);