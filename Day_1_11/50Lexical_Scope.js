// Lexical Scope

const Global_Variable = "Global Variable";   

Global_Function();                   //Hoisting

function Global_Function () {     // this func is lexical scope environment of all internal functions

    const Local_Variable = "Local Variable"; 

    function LocalFunc1 () {
       // const Local_Variable = "New Value" ;
        console.log("Inside Func1 is here", Local_Variable, Global_Variable);  //yeh pehly apny func mein Variable defined find kry ga agr uski function mein huwa toh whin sy value print kry ga nii toh apny lexicaal scope environment mein sy dhhodhy ga
    }
    const LocalFunc2 = function () {}
    const LocalFunc3 = () => {}

    console.log(Local_Variable);
    console.log(Global_Variable);  
    LocalFunc1();
}


//LocalFunct1();   // This will throw an error because LocalFunc1 is not defined in the global scope


const myVar = "value1";

function myApp(){
    

    function myFunc(){
        // const myVar = "value59";
        const myFunc2 = () =>{
            console.log("inside myFunc", myVar);
        }
        myFunc2();
    }

    console.log(myVar);
    myFunc();
}

myApp();