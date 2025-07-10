// const User_Methods_obj ={
//     about :function(){
//         return `${this.firstName} is ${this.age} years old.`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return "Dynamite";
//     },
// };

function Create_User (firstName, lastName, email, age, address){
    const user = Object.create(Create_User.prototype);   // 1. Created Empty Object with proto reference 
    user.firstName=firstName;       // 2. Added key value in empty user obj using .operator
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address; 
    return user;             // 3. Return Object
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


const User1 = Create_User("Ajwa", "Shahid", "ajwashahid756@gmail.com", 20,"My Address", );
console.log(User1);
console.log(User1.about()); 
console.log(User1.is18());
console.log(User1.sing());