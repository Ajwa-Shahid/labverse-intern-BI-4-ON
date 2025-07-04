// functions inside function 

function app() {
    
    const firstfunction = () => {
        console.log("This is a function inside another function.");
    }
    const add = (num1,num2) => (num1 + num2);
    
    const mul = (num1,num2) => (num1 * num2);

    const div = (num1,num2) => (num1 / num2);
       
    
    console.log("Welcome to the app!");
    firstfunction();
    console.log(add(3,2));
    console.log(mul(40,5));
    console.log(div(100,5));
}
app();