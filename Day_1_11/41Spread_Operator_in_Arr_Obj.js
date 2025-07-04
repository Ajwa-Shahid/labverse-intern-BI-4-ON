// spread operator in Arrays

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];

const new_array= [...array1,array2];             //whole array2 will be added as a single element so we use spread operator
const newArray = [...array1, ...array2, 89, 69];
const new_Array = [..."123456789"];      // [...1,2,3,4,5,6,7,8,9]; will give error: 1 is not iterable
const new_Arr = [..."abcdefg"];

console.log(new_array);
console.log(newArray);
console.log(new_Array);
console.log(new_Arr);

// spread operator in objects

//Conversion: numbers,characters,stringns,arrays to object

const objec ={..."12345"};     // properties will be indexes and value will be 1,2,etc
console.log(objec); 

const object={..."abcdefg"};  // properties will be indexes and value will be a,b etc. { "0":"a", "1":"b", etc }
console.log(object); 

const object2={...["item1","item2"]};   // ["item1","item2"] it's an array { "0":"item1", "1":"item2" } 
console.log(object2); 


// Overriding properties in objects


const obj={
    key1:"value1",
    key2:"value2",
    key1:"value3",     // will override the previous value of key1 , If you define the same key multiple times in an object, the last one will override the previous ones.
}
console.log(obj);


//Merge 2 objects using spread operator

const obj1={
    key1:"value1",      // This will override the key1 from obj2 if ...obj2 is spread before obj1 in merged object object
    key2:"value2", 
}

const obj2={
    key1:"valueUnique", // This will override the key1 from obj1 if ...obj1 is spread before obj2 in merged object object
    key2:"value2",
    key3:"value3",
}

const myMergedObject = {
    ...obj1,
    ...obj2,
    key4: "value4",
}
console.log(myMergedObject);

//changing order of objects in Merged object

const myMergedObject2 = {
    ...obj2,
    ...obj1,
    key4: "value4", 
}
console.log(myMergedObject2);