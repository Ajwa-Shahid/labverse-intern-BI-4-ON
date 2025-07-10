const User_Methods_obj ={
    about :function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }

};

function Create_User (firstName, lastName, email, age, address){
    const user = Object.create(User_Methods_obj);   // 1. Created Empty Object with proto reference 
    user.firstName=firstName;       // 2. Added key value in empty user obj using .operator
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address; 
    return user;             // 3. Return Object
}

const User1 = Create_User("Ajwa", "Shahid", "ajwashahid756@gmail.com", 20,"My Address", );
console.log(User1);
console.log(User1.about()); 
console.log(User1.is18());
