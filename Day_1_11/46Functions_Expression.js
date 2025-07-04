//Function Expression

const Happy_birthday = function(){
    console.log("Happy Birthday to you!");
}
Happy_birthday();


const AddNumbers =function(num1,num2,num3){
    return (num1+num2+num3)
}
console.log(AddNumbers(3,1,1));


const Is_Even = function(number){
    return (number % 2=== 0)         // will return True / False
}
console.log(Is_Even(44));


const string = function(string){
    return (string[0]);
}

console.log(string("Whoops!"));


const Arr_ay= function(arr , key){
    for (let i=0; i<=arr.length; i++){
        if (arr[i]=== key){
            return i;
        }
    }
     return -1; 
}

const Arr=[1,2,3,4,5,6,7,8,9];
console.log(Arr_ay(Arr,6));