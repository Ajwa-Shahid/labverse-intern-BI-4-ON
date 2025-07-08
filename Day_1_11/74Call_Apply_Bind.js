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
User1.About();

const User2={
    firstName: "Salar",
    Age:12,
}

//there's no About in User2 but I need to use it
//User2 has to borrow About from User1

User1.About.call(User2);      //will pass something towhom this in about method will represent