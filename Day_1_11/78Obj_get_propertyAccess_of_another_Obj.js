const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = {
    key3: "value3"
}

//OR 
const obj3 = {};
obj3.key4 = "Name";

//OR

//getting property of an another object

const obj4 = Object.create(obj1);   //obj1 is __proto___ reference
console.log(obj4);             //Empty Object {}
obj4.key2 =" Value2";          //Added key value pairs
obj4.key5 = "Value5";

console.log(obj4.key5);
console.log(obj4.key1); //js will check key 1 in obj4 if not here then due to (obj1) it will check in obj1
console.log(obj4.key2); //it's found here no need to go to obj1

console.log(obj1.key2);
console.log(obj2.key3);

console.log(obj2.key1);        //undefined