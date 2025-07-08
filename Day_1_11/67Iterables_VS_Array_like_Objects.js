// iterables 
// jispe hum for of loop laga sakein
// string , array , sets, maps are iterable 


//Iterable on String 
const string = "Ajwa Shahid";
for (let character of string){
    console.log(character);
}

//Iterable on Array
const array =[1,2,3,4];
for (let number of array){
    console.log(number);
}

//Objects are NonIterable 

const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
}

// for (let keys of obj){
//     console.log(keys);     //Error: obj is not iterable
// }




//Array Like Objects (not Iterable)
// 1.jinke pas length property hoti hai 
// 2.aur jiko hum index se access kar sakte hai
// example :- string 

const myString = "Ajwa Shahid";
console.log(myString.length);    //11
console.log(myString[0]); 
