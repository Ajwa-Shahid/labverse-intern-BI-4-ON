// nested destructuring 

const users = [
    { UserId:1, name:"Ajwa", Gender: "Female"},
    { UserId:2, name:"Salar", Gender: "Male"},
    { UserId:3, name:"Zukhruf", Gender: "Female" ,Hobbies:"Making bracelets"},
]; 

const [User1, User2, User3] = users; //Destructuring the array of objects
console.log(User1, User2, User3);

// to get user1 name and user3 gender from objects inside array

const [{name : Name}, ,{Gender , Hobbies}] = users; //, , ka mtlb hai 2nd obj sy kuch ni access krna  yhan py variables ka name jinki value leni hai woh same hona chahiye ni toh undefined ay ga
console.log(Name,Gender,Hobbies);

