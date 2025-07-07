// rest parameters 

function restParameters(a,b,...c){            //to get [3,4,5,6,7,8] array in c
    console.log(`value of a is ${a}`);
    console.log(`value of b is ${b}`);  
    console.log(`value of c is `, c);
}

restParameters(1,2,3,4,5,6,7,8); 

//TASK:

function add_Numbers (...numbers){           //Array will come in numbers
        let Sum = 0;
        for (let number of numbers){
            Sum = Sum + number;
        }
        console.log(`Sum of all numbers is ${Sum}`);
}

add_Numbers(1, 2, 3, 4, 5, 6, 7, 8);