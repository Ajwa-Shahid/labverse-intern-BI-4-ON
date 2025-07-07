// filter method 
//also takes callback function input
//filters callback function which it takes as input always return true or false (boolean value)
//only filter true values

//Filter Even Numbers
const numberArray=[1,2,3,4,5];

const isEven_callback_InputFunc= function (number){
    return number%2===0;     //it will return either true or false
};

const EvenArray = numberArray.filter(isEven_callback_InputFunc);     //will only add true values into new array
console.log(EvenArray);


//Filter Odd Numbers

const OddArray = numberArray.filter(number =>{
    return number%2!=0;
});

console.log(OddArray);
