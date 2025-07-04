//Do while (first do then check Condition)

let i=0;
do{
    console.log(i);
    i++;
}
while(i<10);

console.log("value of i is", i);



i=10;
do{
    console.log(i);
    i++;
}
while(i<10);        //condition is false but 10 will print on console why?  kuky pehly do ho rha baad mein condition check ho rhi hai

console.log("value of i is", i);  // i= 11 -> kuky aik dfa i++ ho gya tha do mein