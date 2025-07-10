const User_Methods_obj ={
    about :function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }

};

function Create_User (firstName, lastName, email, age, address){
    const user = {};                // 1. Create Object  
    user.firstName=firstName;       // 2. Added key value in empty user obj using .operator
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about = User_Methods_obj.about;     //Stored the reference/address of methods stored in memory and defined in object     
    user.is18 = User_Methods_obj.is18;  
    return user;             // 3. Return Object
}

const User1 = Create_User("Ajwa", "Shahid", "ajwashahid756@gmail.com", 20,"My Address", );
console.log(User1);
console.log(User1.about()); 
console.log(User1.is18());


// Issue: If we wanna add more methods in object, just imagine we made,but what if we forget to call thosse in function, and if we add how many times we will add objects functions references into function 