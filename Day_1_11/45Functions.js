// Functions 
// function(keyword) function_name (parameter1, parameter2, ...restParameters) { function_body };

function Print_Birthday(){
    console.log("Happy Birthday to you!");
}
Print_Birthday();


function sum (){
    return(3+4);
}
const Sum = sum();
console.log(Sum); 

// dry : dont repeat yourself

function add(num1, num2){     //Parameters: num1 and num2 are placeholders
    return (num1+num2);
}
const Result = add(4,10);    //Arguments: passing numbers
console.log(Result); 


// Task: Take input 1 number, tell this isEven or not output will be true or false

function isEven(number){
    if(number%2===0){
        return true;
    }
     return false;
}

console.log(isEven(33));       

//Short way for above task

function num_Even(number){
    return (number % 2=== 0)
}

console.log(num_Even(44));


//Task: 

function String(string){
    return (string[0]);
}

console.log(String("Hy Ajwa!"));

//Task:


function Array(arr , key){
    for (let i=0; i<=arr.length; i++){
        if (arr[i]=== key){
            return i;
        }
    }
     return -1; 
}

const arr=[1,2,3,4,5,6,7,8,9];
console.log(Array(arr,4));



