// Maps (it is iterable) set(), get()
// const map_name = new Map();
// store data in ordered fashion (jis way sy set krein gein waisy hi get hoga)

// store key value pair of any type not just string or symbol like object
// duplicate keys are not allowed like objects



//Object literal 
//In objects keys are only in string or symbol 
const person = {
    firstname : "Ajwa",
    age : 20,
    1  :"one",
}
console.log(person.firstname);
console.log(person["age"]);    //OR
console.log(person["1"]);

console.log("Using for in loop");
for (let keys in person){            //using for in as object are non iterable
    console.log(typeof keys);
}


//Maps
// store key value pair (like object)

const map = new Map();
map.set("Item1", "Laptop");    //Adding key value pairs in map using set
map.set("Item2", "Mobile");
map.set("Item3", "Charger");
map.set(1, "one");             //maps can store diff type of keys
map.set([1,2,3],"Array");
map.set({Name: "Ajwa"}, "ObjectLiteral");

console.log(map);

//Shortcut way of above task
const Map2 = new Map([
    ["firstname", "Safa"],
    ["Lastname"," Mahroosh"],
    [ 12,"Age"]
])
console.log(Map2);

//Accessing values of keys from map (can't access like objects using . or [""])

console.log(map.get("Item1"));
console.log(map.get(1));  
console.log(map.get([1,2,3]));        

//To print all keys

console.log(map.keys()); 

//Using for of loop to get keys as maps are iterable
console.log("To get only keys");
for(let key of map.keys()){
    console.log(key, typeof key);
}

//To get both keys and values
console.log("to get both Key Values");
for(let key of map){
    console.log(key, typeof key);
    console.log(Array.isArray(key));
}

// for (let key, value of map){
//     console.log(key , value);    //Error: Must have a single binding
// }                               // we will use destructurinig Method

console.log("To print both keys and values together")
for (let [key, value] of map){
    console.log(key , value);    
}      



// Conversion: Obj to Map , Map to Obj 

const object = {
    product1: "Dishes",
    product2: "Soap",
    product3: "Marbles",
    product4: "Crystals",
}

// obj to map

const Map3 = new Map(Object.entries(object));
Map3.set("prodect4", "Chalks");
Map3.set("product5", "Glue");

console.log(Map3);

// map to obj 

const added_obj = Object.fromEntries(Map3);
console.log(added_obj);


// Task add additional key value pairs in object but store in map
//Obj to Obj Mapping

const user1 = {
    id: 1,
   Name: "Zuhan",
}

const user2 = {
    id:2,
    Name:"Rumana",
}

console.log("Object to Object mapping")
const extraInfo = new Map();
extraInfo.set(user1, {age: 8, gender: "Male"});  //user is obj here as a key and value is also obj    
extraInfo.set(user2, {age: 14, Gender: "Female"});
console.log(extraInfo);

//Accessing values from mapped object like id, age , gender
console.log(user1.id, user1.Name);                
console.log(user2.id, user2.Name);           

console.log(extraInfo.get(user1));       //print values of keys user1 and user2
console.log(extraInfo.get(user2));  

console.log(extraInfo.get(user1).age, extraInfo.get(user1).gender);
console.log(extraInfo.get(user2).age, extraInfo.get(user2).Gender);


