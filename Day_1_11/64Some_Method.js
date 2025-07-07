// some method 

//Task: Check if there's any even number

const numbers = [1,2,4,5,6,7];

const isAnyEven = numbers.some(number => number % 2===0);
console.log(isAnyEven);



//Realistic Example

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 35000},
    {productId: 3, productName: "macbook", price: 25000},
]

//Task: is there any product whose price is greater than 1lac
const price1Lac = userCart.some(product => product.price > 100000);
console.log(price1Lac);