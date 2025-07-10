    const user1 = {
    firstName : "Ajwa",
    lastName :"lastName",
    email : "email",
    age : "20",
    address : "address",
    about : function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

const variable = user1.about();
console.log(variable);

//but I need millions of users about data like user2,3,4,5, we can't make many objs......for this
//we'll make a function that'l take inputs of keys & will return an object


// Function:
// 1. Create Object
// 2. Add key value pair
// 3. Return Object

function Create_User (firstName, lastName, email, age, address){
    const user = {};                // 1. Create Object  
    user.firstName=firstName;       // 2. Added key value in empty user obj using .operator
    user.lastName=lastName;
    user.email=email;
    user.age=age;
    user.address=address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old.`;
    },
    user.is18 = function(){
        return this.age >= 18;
    }

    return user;             // 3. Return Object
}

//Creating Object using above Function

const user2 = Create_User("Ajwa", "Shahid", "ajwashahid345@gmail.com", 20, "My Address");
console.log(user2);
console.log(user2.about());
console.log(user2.is18());


//Issue: jitni dfa users ky objs bnein gein utni dfa func ky andr waly obj and methods memory mein create hongein
const user3 = Create_User("Salar", "Ahmed", "Salarshahid345@gmail.com", 12, "My Address");
const user4 = Create_User("SALAR", "Ahmed", "Salarshahid345@gmail.com", 12, "My Address");
const user5 = Create_User("Ahmad", "Ahmed", "Salarshahid345@gmail.com", 12, "My Address");

//for millions of users millions of memory will consume