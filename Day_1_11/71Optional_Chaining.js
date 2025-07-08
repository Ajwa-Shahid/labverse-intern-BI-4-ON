// optional chaining 

const User = {
    firstName: "Ajwa",
    Address:  {houseNo : 8345},
}
console.log(User.firstName);
console.log(User.Address);       //if  comment//Address:  {houseNo : 8345}, then it will give undefined
console.log(User.Address.houseNo);//if comment//Address:  {houseNo : 8345}, then it will give Error: Cannot read properties of undefined

//Sometimes,it happens that property doesn't exist currently if we //Address & we try to access it but it then stores next second
//so we want it doesn't give error but can give undefined
//So we use ?.

const Users = {
    firstName: "Salar Ahmed",
    //Address:  {houseNo : 8345},
}

//?. will only proceed next if previous exists as Address is undefines here so will not procees next and will print undefined
console.log(Users?.firstName);          //if Users exist then give firstName, will give Ajwa as this property is present
console.log(Users?.Address?.houseNo);  //now it'll give undefined not error like above

