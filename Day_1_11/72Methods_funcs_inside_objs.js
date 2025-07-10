// Methods (function inside object)

const Method_Obj = {
    firstName: "Ajwa",
    Age:20,
    About (){      
        console.log(this); 
        console.log(`My name is ${this.firstName} and my age is ${this.Age}`);   
    }
}

//(this) is an obj that calls it's own function in which it's present
const PersonObj ={
    firstName: "Ajwa",
    Age:20,
    About: function (){      //Method as it's defined inside object
        console.log(this); //this is an obj that will call whole PersonObj,  this is another name of object in which it's defined
        console.log(`My name is ${this.firstName} and my age is ${this.Age}`);   // By using this any updation in name and age will be automatically update here
    }
}       

//To access function inside object

console.log(PersonObj.About);   //will give value of About key (whole function) 
PersonObj.About();   //call the function of About key, About() is function inside Object, this inside About() is actually the PersonObj object


//This Example

function PersonInfo (){
    console.log(`Person's name is ${this.firstName} and age is ${this.Age}`); 
}

const Person1={
    firstName: "Sarib",
    Age:20,
    About: PersonInfo   //only set not called
}
const Person2={
    firstName: "Zukhruf",
    Age:12,
    About: PersonInfo
}
const Person3={
    firstName: "Salar",
    Age:10,
    About: PersonInfo
}

Person1.About();   // About is PersonInfo() and Person1 is calling it 
Person2.About();
Person3.About();  //this in this method will be that onject presenton left side of dot 