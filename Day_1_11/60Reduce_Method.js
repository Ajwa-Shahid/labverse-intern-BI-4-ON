// reduce method
//takes callback function as an input


//Sum of all numbers in an Array
const numberArray = [1,2,3,4,5,10];  //0th index py accumulator ki 1st value hoti and baki indexes py current value 

const sum = numberArray.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
});

console.log(sum);

//Tracking

//accumulator       currentValue    return
//1(0 index)        2(1 index)     1+2 = 3
//3(lastreturn)     3(nxtCurrent)  3+3 = 6
//6(lastreturn)     4(nxtCurrent)  6+4 = 10
//10(lastreturn)    5(nxtCurrent)  10+5 = 15
//15(lastreturn)    10(nxtCurrent) 15+10= 25
//agr accumulator ki value khud assign krein gein toh current value 0th index sy start hogi as below eg




//Realistic Example (sum of prices of all products)

const userCart = [
    {productId: 1, productName:"Laptop", price: 50000 },
    {productId: 2, productName:"Mobile", price: 70000 },
    {productId: 3, productName:"LED", price: 80000 },
]

const totalPrice = userCart.reduce((accumulator_totalPrice, currentProduct)=>{
    return accumulator_totalPrice + currentProduct.price;
},0);    //agr accumulator ki value khud assign krein gein toh currentValue 0th index sy start hogi

console.log(totalPrice);

// total price      currentValue                                 return 
// 0                50000{extracted from whole 1st object}        50000
// 50000            70000                                         12000
// 12000            80000                                         20000