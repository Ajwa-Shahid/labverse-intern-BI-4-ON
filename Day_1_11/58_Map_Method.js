// map method (Imp method in react)
//map function always makes new array when returns
//just like forEach loop it also takes callback input

const numbers=[6,7,8,9];

const ExpressionFunc = function (number){
    console.log(`Sqaure of ${number} is : ${number*number}`);
    
}
numbers.map(ExpressionFunc);    //will not return an array

//OR


const number=[2,4,7,9];

const Callback_input = function (number){
    return (`Sqaure of ${number} is : ${number*number}`);    //using return is better approach
    
}
const Array = number.map(Callback_input);     //will return an array
console.log(Array);               


//Shortcut way of above task

const Number=[12,34,56];


const array = Number.map(function (number){                //defining func inside map func instead of separate function
    return (`Sqaure of ${number} is : ${number*number}`);
});   

console.log(array); 

//using Arrow function inside map function

const Num_ber=[1,2,3];


const arr_ay = Num_ber.map((number,index) =>{                //defining func inside map func instead of separate function
    return `Index is: ${index} and Sqaure of ${number} is : ${number*number}`;
});   


console.log(arr_ay); 


//Realistic Example  

const Users = [
    {firstname: "Sarib", age: 22},
    {firstname: "Ajwa", age: 20},
    {firstname: "Zukhruf", age: 17},
    {firstname: "Salar", age: 14},
]

const Arr_ay = Users.map(User => {
    console.log(User.firstname);           //will not return an array
});

//Or

const arra_y = Users.map(User => {
    return User.firstname;           //will return an array
});
console.log(arra_y);

//OR 

const Ar_ray = Users.map(user =>{
    return user.age;              //will return an Array
});

console.log(Ar_ray);

