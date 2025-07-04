// array destructuring 

// Task: Make 2 variables & store value 1 in 1st var and value 2 in 2nd var

const myArray = ["Value1", "Value2", "Value3"];

let value1=myArray[0];
let value2=myArray[1];
console.log(value1,value2);

//Shortcut to do above task

let[variable1,variable2,variable3] = myArray;   //myArray pehly variable mein apni 0th index wali value store krygi and 2nd var mein 1st index wali value
console.log(variable1,variable2,variable3);


const[var1,var2,var3,var4] = myArray;
console.log(var1,var2,var3,var4);            //4th value was not in Array so undefined

// var1=23;   TypeError: Assignment to constant variable.


//to store Array's value 3 in variable 2

const[vari1, ,vari2,vari3,vari4] = myArray;    //skipped the variable 2 by , , 
console.log(vari1,vari2,vari3,vari4);


// to make separate Array of last elements

const MyArray = [1,2,3,4,5];

let [Var1, Var2] = MyArray;
console.log("value of myvar1", Var1);
console.log("value of myvar2", Var2);

//now make separate array of 3,4,5 elements

let myNewArray=MyArray.slice(2);
console.log(myNewArray);

// OR

let my_newArray=MyArray.concat(3,4,5);
console.log(myNewArray);

//OR

const My_Array = [1,2,3,4,5];

let [variab1, variab2, ...get_all_remaining_elements_its_Array] = MyArray;
console.log("value of Variable1", variab1);
console.log("value of Variable2", variab2);
console.log(get_all_remaining_elements_its_Array);