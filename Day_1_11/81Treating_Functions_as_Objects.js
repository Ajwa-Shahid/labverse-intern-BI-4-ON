// javascript function Treats as ===> function  + object

function hello(){
    console.log("Annyoung Oopa!");
}

hello();

// function provides more usefull properties.
// 1. JS functions gives us name property name property ---> tells function name;

console.log(hello.name);                                  //accessing js property

// we can add our own properties/keys in functions as well like objects

hello.myOwnProperty = "Value of my own key of function "; // myOwnProperty is a key and next is it's value
console.log(hello.myOwnProperty);                         //accessing my own property

