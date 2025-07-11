// New keyword
// 1. Creates Empty object & this refers to Empty object (this = {})
// 2. Added key value pairs in empty object
// 3. Return that Empty object
// 4. Will create link with prototype itself no need for (const user = Object.create(Create_User.prototype);)

function Create_User(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;               //Added key value pairs in empty object
}

Create_User.prototype.About = function() {
    console.log(this.firstname, this.lastname);
}

const user1 = new Create_User("Ajwa", "Shahid");
const user2 = new Create_User("Salar", "Ahmed");
const user3 = new Create_User("Sarib", "Ali");

console.log(typeof user1, user1);
console.log(user1.About());
