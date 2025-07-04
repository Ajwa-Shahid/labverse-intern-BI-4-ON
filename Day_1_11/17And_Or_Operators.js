// and  or operator 

let firstName="Ajwa";
let age=20;

if(firstName[0]==="A"){
    console.log("Your firstName starts with " + firstName[0] );
}
if(age>18){
    console.log("Your'e above 18");
}

// to check both conditions together

//and && if both true then condition will be

if(firstName[0]==="A" && age>18){
    console.log("Your firstName starts with " + firstName[0] );
    console.log("Your'e above 18");
}

if(firstName[0] === "H" && age>18){
    console.log("Name starts with H and above 18");
}else{
    console.log("inside else");
}
    


// or || if one true then condition will be true
if(firstName[0]==="A" || age<21){
    console.log("Your firstName starts with " + firstName[0] );
    console.log("Your'e above 18");
}

if(firstName[0] === "H" || age>18){
    console.log("inside if");
}else{
    console.log("inside else");
}