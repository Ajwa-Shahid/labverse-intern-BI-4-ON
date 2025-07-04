// how to iterate object by 2 ways
// 2 ways:
// for in loop 
// Object.keys 

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

console.log(Object.keys(person));   //yani person ki sari keys/properties ko show kro