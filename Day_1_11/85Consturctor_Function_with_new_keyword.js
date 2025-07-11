
//Constructor Function
//jissy hmein new keyword use krky call krna hai usky liye hum is Func ko Capital letter sy start krty hein 
function Create_User (firstName, lastName, email, age, address){

    this.firstName=firstName;       // 2. Added key value in empty obj using this. operator
    this.lastName=lastName;
    this.email=email;
    this.age=age;
    this.address=address; 

}

console.log(Create_User.prototype);    //{}  it's better to use it to add key value pair functions instead of creating object that takes separate space

Create_User.prototype.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    }

Create_User.prototype.is18 = function(){
        return this.age >= 18;
    } 

Create_User.prototype.sing = function(){
        return "Dynamite";
    }


const User1 = new Create_User("Ajwa", "Shahid", "ajwashahid756@gmail.com", 20,"My Address", );
console.log(User1);
console.log(User1.about()); 
console.log(User1.is18());
console.log(User1.sing());