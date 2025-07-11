// objects/Instance reference type  
// arrays are good but not sufficient for real world data 
// objects store key value pairs  (property:value) 
//properties are in string by default
// objects don't have index

// how to create objects 
// const obj_name ={Key value pairs};

const person = {name:"Ajwa", age:20};
console.log(person ,typeof person);

//Accessing properties
console.log(person.name, person.age);  //OR
console.log(person["name"], person["age"]);   //as property is string by default

const Person = {
    name:"Ajwa",
    age:20,
    hobbies:["Watching K-Dramas", "listening Music"],   //it's an Array, we can apply it all functionalities of Array
    //OR
    "color":["Modern","Classic"]
}
console.log(Person);
// 2 ways:
console.log(Person.name, Person.age, Person.hobbies,Person.color);
console.log(Person["name"], Person["age"], Person["hobbies"],Person["color"]);


// how to add key value pair to already defined object
// 2 ways:
//obj_name.key/property_name = property_value; OR
//obj_name["property_name"]= value;

Person.height=5;
console.log(Person);    

//OR

Person["knowledge"] = "BS CS";
console.log(Person);  