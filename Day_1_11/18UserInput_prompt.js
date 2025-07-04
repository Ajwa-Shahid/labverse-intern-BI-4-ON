// UserInput

//User Input from prompt(), which isn't defined in nodejs
//pressed: Windows + r, typed: cmd, pasted: npm install prompt-sync
//now by defining: const prompt = require("prompt-sync")();
//at start of file will help me using prompt function in VS terminal as well instead of browser

const prompt = require("prompt-sync")();

let userinput = prompt("Enter Input: "); 

console.log(userinput, typeof userinput);