// Template string Printing (${Var_name})

// My Name is Ajwa and my Age is 20

let Age=20;
let my_name="Ajwa";
let Aboutme="My name is " + my_name + " " + "and my Age is" + " " + Age;  //OR
Aboutme="My name is " + my_name + " and my Age is "+ Age; //OR
Aboutme=`My name is ${my_name} and my Age is ${Age}`; //Better approach as no many + symbols and spaces need to add
console.log(Aboutme , Age, my_name);