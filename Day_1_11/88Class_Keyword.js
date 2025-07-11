// Class Keyword

// Classes are fake in JS

// class class-Name {
//     constructor(){
//          this constructor will create an object 
//     }
// }

//when called class with new keyword then constructor in class will be called automatically, due to which obj will be called
//and due to 'this' key value pairs will be add in that empty obj, obj will return and methods will be add in prototype 

class Create_User{

    constructor(firstName, lastName, email, age, address){
        console.log("Constructor called")
        this.firstName=firstName;       
        this.lastName=lastName;
        this.email=email;
        this.age=age;
        this.address=address; 
    }
    
    //Methods: Functions in class or Objects
    About(){return `${this.firstName} is ${this.age} years old.`;}
    is18(){ return this.age >= 18;}
    sing(){ return "Dynamite";}
}



const User1 = new Create_User("Ajwa", "Shahid", "ajwashahid756@gmail.com", 20,"My Address", );
const User2 = new Create_User("Salar", "Shahid", "Salarshahid756@gmail.com", 12,"My Address", );
const User3 = new Create_User("Zukhruf", "Shahid", "Zuukshahid756@gmail.com", 16,"My Address", );

console.log(User2, User3.About());


//to see prototypes of objects

console.log(Object.getPrototypeOf(User1));