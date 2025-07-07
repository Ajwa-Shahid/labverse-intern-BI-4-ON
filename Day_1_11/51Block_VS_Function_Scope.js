// block scope vs function scope 


// let and const are block scope   (if let and const are defined inside a block we can't access them out of thaat block)


{
    let blockVar = "I am a block scoped variable"; 
    console.log(blockVar);
}

{
    const blockVar = "I am a block scoped constant"; 
    console.log(blockVar);
}
//console.log(blockVar); // Error:  because blockVar is not defined outside the block

const Global_Block_Variable = "Global Block Variable";
console.log(Global_Block_Variable);




// var is function/global scope (if var is defined inside a function we can't access it out of thaat function but if defined outside a function we can access it anywhere in the code)

console.log("Var is function/global scope");

{
    var functionVar = "I am a function/global scoped variable"; 
    console.log(functionVar);
}

console.log(functionVar);         //can access outside block

{
    console.log(functionVar);     //can access in another block
}


{
    var first_Name = "Ajwa";
    console.log(first_Name);    
}

{
    var first_Name = "Shahid";  
    console.log(first_Name);       // first will get value from it's block scope environment 
}

{
    console.log(first_Name); 
}



//IF Example

if(true){

    let Var = "I am a block scoped let variable inside if";
    const Var2 = "I am a block scoped constant inside if";
    var Var3 = "I am a function/global scoped variable inside if"; 

    console.log(Var);
    console.log(Var2);
    console.log(Var3);
}

//console.log(Var); // Error: Var is not defined outside the if block
//console.log(Var2); // Error: Var2 is not defined outside the if block
console.log(Var3); // No Error



function myApp(){
    if(true){
        let firstName = "Ajwa";
        console.log(firstName);
    }

    //console.log(firstName); // Error: firstName is not defined outside the if block

    if(true){
        //console.log(firstName);  // Error: because firstName is not defined 
    }
    
    if(true){
        var firstName = "Salar";
        console.log(firstName);
    }
    console.log(firstName);    //var type variable is accessible outside

    if(true){
        console.log(firstName);   
    }
}

myApp();