console.log(this);      //Node js: {} Empty Object 
console.log(global);    //Node.js" global object       

console.log(this)      //Browser: Window
//console.log(window)    //Browser: Window

"use strict";
function myFunc(){
    console.log(this);    //Nodejs: global
}
myFunc();