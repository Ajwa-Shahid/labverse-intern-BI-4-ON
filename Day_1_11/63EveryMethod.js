// every method
//Task: Check all the elements in the array are even

const numbers = [2,4,6,8,10,12];

const everyEven = numbers.every( number => number%2===0);  
console.log(everyEven);   //true when all the elements are even in an array


//Realistic Example

const products = [
    {productId: 1, produceName: "p1",price: 300 },
    {productId: 2, produceName: "p2",price: 3000 },
    {productId: 3, produceName: "p3",price: 200 },
    {productId: 4, produceName: "p4",price: 8000 },
    {productId: 5, produceName: "p5",price: 500 },
]

//Task: Check every product size is less than 30000

const LessThan30000 = products.every(product => product.price < 30000);
console.log(LessThan30000);