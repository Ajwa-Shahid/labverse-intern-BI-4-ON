// important array methods 

// for each loop
// map    (imp)
// filter  (useful)
// reduce   (imp)
//anonymous function (having no name)



//  forEachLoop



const numbers =[4,8,12,16];

function multiplyBy2 (number, index){
    console.log(`index is : ${index}`);
    console.log(`${number} * 2 = ${number*2}`);
}

console.log("Using Repetition");
multiplyBy2(numbers[0], 0);
multiplyBy2(numbers[1], 1);     

console.log("Using for loop");            //to avoid repeatation
for (let i = 0; i<numbers.length; i++){
    multiplyBy2(numbers[i], i); 
}


//Shortcut for above task using forEach 

console.log("Using forEach that takes input as callback");

const Numbers =[4,8,12,16];

function Function (number, index){
    console.log(`index is : ${index} and number is : ${number}`);
    
}

Numbers.forEach(Function);       //forEach 1st time Numbers array ka sbsy pehla element uthy ga aur passed function ko call kr dy ga and so on


//OR more shortcut of above method using anonymous function         

                  
console.log("forEach passes arguments to anonymous function (having no name) in it's () we can define whole functions and its parameters");

const number =[5,10,15,20];

number.forEach(function (index,number){console.log(`Number is : ${index} & Index is : ${number}`);}); 
number.forEach(function(number,index){console.log(`index is : ${index} OR ${number} * 2 = ${number*2}`);});


//Realistic Example of forEach()

const Users = [
    {firstname: "Sarib", age: 22},
    {firstname: "Ajwa", age: 20},
    {firstname: "Zukhruf", age: 17},
    {firstname: "Salar", age: 14},
]

//function will take object as an input here

Users.forEach(function(ObjectUser){        //will take 1st obj from Users Array in 1st go and then 2nd obj in 2nd go and so on
    console.log(ObjectUser.firstname);
});

//OR

Users.forEach((user, index) =>{    //user is an obj parameter in arrow funct we can remove () from user as it's 1 parameter in arrow function  
   console.log(user.age, index);
});

//OR

for (let user of Users){
    console.log(user.age);
}