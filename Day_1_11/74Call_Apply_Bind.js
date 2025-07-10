// Call

function hello(){
    console.log("Hello World");
}
hello();             //OR
hello.call();


const User1={
    firstName: "Sarib",
    Age:20,
    About: function(){
        console.log(this.firstName,this.Age);
    }
}

User1.About();      //OR by using call()

const User2={
    firstName: "Salar",
    Age:12,
}

//there's no About in User2 but I need to use it
//User2 has to borrow About from User1

User1.About.call(User2);      //will pass something to whom this in about method will represent


// Parameters in Method

const USER1 = {
    UserID: 1,
    UserName: "Ajwa",
    UserAge: 20,
    About: function (hobbies, favBand){
        console.log(this.UserID, this.UserName, this.UserAge, hobbies, favBand);
    }
}

const USER2 = {
    UserID: 1,
    UserName: "Zukhruf",
    UserAge: 16,
}

USER1.About("Making Pearls", "BTS");  //OR
USER1.About.call(USER2, "Sleeping","bangtan");

//OR above task function outside

function About(hobbies, favBand){
    console.log(this.UserID, this.UserName, this.UserAge, hobbies, favBand);
}

const USER_1 = {
    UserID: 1,
    UserName: "Nimra",
    UserAge: 20,
}

const USER_2 = {
    UserID: 2,
    UserName: "Minahil",
    UserAge: 20,
}

About.call(USER_1,"k-dramas", "Bangtan");



//Apply 
// (to pass arguments in an array)
// By using apply Instead of call we can pass Arguments as an Array once not separately in a string


About.apply(USER_2,["korean_dramas", "Bant"]);



//Bind
// will return a function

const Func =About.bind(USER_1, "korean_dramas", "Ban");
Func();


// Mistake to Avoid

const User={
    firstName: "Sarib",
    Age:20,
    About: function(){
        console.log(this.firstName,this.Age);
    }
}

User.About();
const Var = User.About;     //Gave reference of About function not called As given below 
// const var = function(){
//         console.log(this.firstName,this.Age);
//     }
Var(); //that's why this will give undefined

const variable = User.About.bind(User); //defined this reference by bind()