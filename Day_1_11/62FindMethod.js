// find method 
//takes callback function as an input


const StringArray =  ["Sarib", "Ajw", "Zukhruf", "Salar","Sam"];

function isLength3 (String){
    return String.length===3 ;    //will return Boolean
};

console.log(isLength3("Cat")); 

const arrayOfLength3=StringArray.find(isLength3);   //1st string of array will pass to function and so on find will find the 3 characters string from it 
console.log(arrayOfLength3);    //will only give 1st three character dtring

//OR
const ArrayOfLength3 = StringArray.find((String)=> String.length===3);
console.log(ArrayOfLength3); 


//Realistic Example
//Find user who's Id is 3

const users = [
    {userId : 1, userName: "Shahid"},
    {userId : 2, userName: "Saiqa"},
    {userId : 3, userName: "Sarib"},
    {userId : 4, userName: "Ajwa"},
    {userId : 5, userName: "Zukhruf"},
    {userId : 6, userName: "Salar"},
];

const UserID3 = users.find((user)=> user.userId===3);
console.log(UserID3);