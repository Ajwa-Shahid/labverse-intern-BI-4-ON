// default parameters 

function addNumbers(a,b){
    if (b === undefined){
        b = 1 ;
    }
    return a + b;
}
console.log(addNumbers(5)); //only one argument passed
console.log(addNumbers(5, 2)); //both arguments passed

// Shortcut of above Task

function add_Numbers (a , b = 1 ){
    return a + b;
}

console.log(add_Numbers(9)); //only one argument passed
console.log(add_Numbers(5, 3)); //both arguments passed