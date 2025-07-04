// how to iterate object by 2 ways
// 3 ways:
// for in loop 
// Object.keys 
// for of loop

const person = {
    name: "Ajwa",
    age: 22,
    "person hobbies": ["guitar", "sleeping", "listening music"]
}

// 1. for in loop 

//to print properties name 

for(let index in person){           //person obj sy 1 by 1 index value ayy gii jo ky yhan property ka name hoga index value 
    console.log(index);      
}

//to print properties value

for(let index in person){   
    console.log(person[index]);      //here index will contain properties 1 by 1
}

//to get both key value pair property:value

for(let index in person){   
    console.log(`${index}: ${person[index]}`);      //here index will contain properties 1 by 1
}

//OR

for(let index in person){   
    console.log( index, " : " ,person[index]);      
}



//2. Object.keys

console.log("Object.keys");

console.log(Object.keys(person));   //will return an array of object's properties, yani person ki sari keys/properties ko show kro
console.log(typeof Object.keys(person));    //object, as Array is an object
console.log(Array.isArray(Object.keys(person)));  //true, as Object.keys returns an array




//3. for of loop


// to print properties name

for (let property of Object.keys(person)) {  //Object.keys(person) will return an array of keys
    console.log(property);   //will print the keys of the object
}

// to print properties value

for (let property of Object.keys(person)) {  
    console.log(person[property]);   //will print the values of the object
}

// to print both properties and value

for (let property of Object.keys(person)) {
    console.log(`${property}:${person[property]}`);   //will print the key:value pair of the object
}

// OR

for (let property of Object.keys(person)) {
    console.log(property, " : ", person[property] );   //will print the key:value pair of the object
}









