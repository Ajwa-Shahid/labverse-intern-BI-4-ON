// truthy and falsy values 

// falsy values 


// false
// ""
// null 
// undefined
// 0

//Empty String ""
let firstName="";

if (firstName){                 //as (Empty String "") is a falsy value so if condition will be false
    console.log(firstName);
}else{
    console.log("First Name is Kinda Empty");
}

//undefined  
let secondName;

if (secondName){                 //as (Undefined) is a falsy value so if condition will be false
    console.log(secondName);
}else{
    console.log("Second Name is not Defined so else condition will true ");
}

// null
let N_ame=null;
if (N_ame){                 //as (null) is a falsy value so if condition will be false
    console.log(N_ame);
}else{
    console.log("Second Name is not Defined so else condition will true ");
}

// truthy values
// "abc"
// 1, -1