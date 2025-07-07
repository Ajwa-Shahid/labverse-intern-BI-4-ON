// parameters destructuring 

//Use in Objects and Parameters 

const Object = {
    name:"Ajwa",
    age:20,
    gender:"Female",
}

function Get_Obj_Details (obj){
    console.log(obj.name);
    console.log(obj.age);
    console.log(obj.gender);
}

Get_Obj_Details(Object);

//Shortcut of above Task

function getObjDetails ({name, age, gender}){     //Destructured from object
    console.log(name, age, gender);
}

getObjDetails(Object);