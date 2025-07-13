function Simple_Calculator(numb1, numb2, operator) {

    switch(operator) {

        case "+":
            return `${numb1} ${operator} ${numb2} = ${numb1 + numb2}`;
        
        case "-":
            return `${numb1} ${operator} ${numb2} = ${numb1 - numb2}`;
        
        case "*":
            return `${numb1} ${operator} ${numb2} = ${numb1 * numb2}`;
        
        case "/":
            if (numb2 === 0) {
                return "Division is not possible by 0";
            } else {
                return `${numb1} ${operator} ${numb2} = ${numb1 / numb2}`;
            }
        
        default:
            return "Invalid operator. Please use +, -, *, or /";
    }
}

const prompt = require("prompt-sync")();

let numb1 = Number(prompt("Enter number 1: "));     //Number() as prompt takes input in string
let numb2 = Number(prompt("Enter number 2: "));
let operator = prompt("Enter operator (+, -, *, /): ");

console.log(Simple_Calculator(numb1, numb2, operator));
