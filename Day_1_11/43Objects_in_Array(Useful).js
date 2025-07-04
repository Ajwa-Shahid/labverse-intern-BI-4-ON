// objects inside array 
// very useful in real world applications

// const users = ["Data of user 1 ", "Data of user 2", "Data of user 3"];
// for this we will make objects in an array (const users = [{}, {}, {}];)  3 objects in an array

const users = [
    { UserId:1, name:"Ajwa", Gender: "Female"},
    { UserId:2, name:"Salar", Gender: "Male"},
    { UserId:3, name:"Zukhruf", Gender: "Female"},
];  

console.log(users);     //whole array print
console.table(users);   //to show in table format
console.log(users[0]);   // to access the data of user 1

// to access all data 

console.log("Using Loop");
for (let user of users) {
    console.log(user);
}

// to access specified property of all ussers

console.log("Using Loop to access specified property of all ussers");
for (let user of users){
    console.log(user.UserId, user.name)
}