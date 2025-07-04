// while loop 
//Task: Print Numbers 0 to 9

let i=0;
while(i<10){
    console.log(i);
    i++;
}

console.log(`Current value of i is ${i}`);

//Tasks: Sum of Numbers 1 to 100

i=0;
let sum=0;
while(i<=100){
    sum+=i;
    i++;
}
console.log(`Total Sum: ${sum}`);

// OR by Formula (Faster than Loop)

// n*(n+1)/2
let num=100;
sum=num*num/2;
console.log(`Total Sum: ${sum}`);