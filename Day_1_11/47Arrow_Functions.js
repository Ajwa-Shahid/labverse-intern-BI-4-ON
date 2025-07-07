// Arrow functions
//just add => after () by removing function(keyword)

//1

const Happy_birthday = () =>{
    console.log("Happy Birthday to you!");
}
Happy_birthday();

//Arrow function in one line if func body has only one line as above function

const happy_birthday = () => console.log("Happy Birthday to you!");
happy_birthday();

//2

const AddNumbers = (num1,num2,num3) => {
    return (num1+num2+num3);
}
console.log(AddNumbers(3,1,1));

//Function in one line

const addNumbers = (num1,num2,num3) => (num1+num2+num3);
console.log(addNumbers(3,1,1));

//3

//if there's only one parameter only then we can remove parenthesis as from (number) we can remove () so can be write as number

const Is_Even = (number) =>{     //can also be written as    // const Is_Even = number =>
    return (number % 2=== 0)         // will return True / False
}
console.log(Is_Even(44));

//Function in one line

const is_Even = number => (number % 2===0);

//4

const string = (string) =>{      // (string) as string
    return (string[0]);
}

console.log(string("Whoops!"));

//Function in one line

const str = string => (string[0]);
console.log(str("Whoops!"));

//5

const Arr_ay= (arr , key)=>{
    for (let i=0; i<=arr.length; i++){
        if (arr[i]=== key){
            return i;
        }
    }
     return -1; 
}

const Arr=[1,2,3,4,5,6,7,8,9];
console.log(Arr_ay(Arr,6));