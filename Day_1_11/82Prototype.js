// function provides more usefull properties.

//Prototype
// 2. Only functions gives us empty object({} free space) -> Prototype Property
function hello(){
    console.log("Annyoung Oopa!");
}
hello();

hello.prototype;    //{} so that agr hmein func mein koi key value pair add krna pry toh hum is prototype mein add kr dein


//Only functions have protype property
if(hello.prototype){                                //hello was a function
    console.log("Function has protype only");
}else{
    console.log("Prototype property is not present");
}

const Hello ={ key1: "Value1"};                     

if(Hello.prototype){                                //Hello was an Object
    console.log("Function has protype only");
}else{
    console.log("Prototype property is not present in Obj");
}

const Hel_lo = [1,2,3,4,5];

if(Hel_lo.prototype){                                //Hel_lo was anArray
    console.log("Function has protype only");
}else{
    console.log("Prototype property is not present in Array");
}


//Adding key value pair in function using protype property

hello.prototype.Property = "Property_Value";
hello.prototype.Key= "Key_Value";
hello.prototype.Function = function (){
    return "Hello I'm a Function";
}

console.log(hello.prototype);
console.log(hello.prototype.Function());
