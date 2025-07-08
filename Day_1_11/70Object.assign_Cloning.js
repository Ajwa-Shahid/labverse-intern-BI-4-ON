// clone using Object.assign 

//Heap Memory (Both Obj1 and Obj2 will have same memory object )
const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 =  obj1;
console.log(obj1);
console.log(obj2);

obj1.key3 = "value3" ; //added new value it will add in obj2 too due to same address
console.log(obj1);
console.log(obj2);

//aik object ko clone krein mgr usmein changings krny sy dosry mein changings 
//na hon us ky liye hum cloning krty hein we will clone Objects using Object.assign



const Obj1 = {
    Key1: "value1",
    Key2: "value2"
}

const Obj2 = {...Obj1};    //by doing this obj1 mein jo add kreinn gein woh obj2 mein nii hoga
Obj1.Key3 = "Value3";

console.log(Obj1);
console.log(Obj2);

//Cloning using Object.assign()

console.log("Cloning using Object.assign");
const OBJ1 = {
    key1: "value1",
    key2: "value2"
}

const OBJ2 = Object.assign( {}, OBJ1);    //{} is Empty object
OBJ1.key3="value3";

console.log(OBJ1);
console.log(OBJ2);
