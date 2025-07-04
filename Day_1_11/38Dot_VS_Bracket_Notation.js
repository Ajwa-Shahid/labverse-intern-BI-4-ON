// difference between dot and bracket notaion

const Person={
    name:"Ajwa",
    "age":20,
    "My hobbies":["Dramas","Music","Poetry"]     //for spacing use strings "Property Name" else will give error
}

// to access space property use bracket notation not dot cuz dot will give error
console.log(Person["My hobbies"]);

//Task: Add key value pair in Person named Object and take key value from key variable
const key = "Email";
Person.key=key;                          //key will add as property
console.log(Person);

//Task: Add key value pair in Person named Object and take key name from variable

Person.Key="ajwashahid597@gmail.com";   //Key is new property
console.log(Person);

//But we want variable's value as key(property) name 

Person[key]="ajwashahid697@gmail.com"; //  Person[key] -> [key] willpass key value as a property in object
console.log(Person);