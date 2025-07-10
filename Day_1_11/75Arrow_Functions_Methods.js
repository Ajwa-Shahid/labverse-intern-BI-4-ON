//Arrow Functions Method
//there's no 'this' in Arrow Function
//it takes 'this' from it's surroundings

const User={
    firstName: "Sarib",
    Age:20,
    About: ()=>{
        console.log(this);
        console.log(this.firstName,this.Age);
    }
}

//OR

const User1={
    firstName: "Sarib",
    Age:20,
    About(){
        console.log(this);
        console.log(this.firstName,this.Age);
    }
}

User.About();      //undefined as arrow func takes this from its surroundings (1 level up global)
User.About.call(User);  //still will undefined