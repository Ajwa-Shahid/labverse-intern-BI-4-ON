// getter and setters 

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    get fullName(){   // due to get method is behaving as property we can access it without ()  
        return `${this.firstName} ${this.lastName}`;
    }

    setName (firstName, lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    set fullName(fullname){
        // fullname.split(" ");  //we'll split full name with spaces into variables using destructuring
        // Zukhruf Shahid   //jhan py space mily ga whan sy split kr dy ga aur aik list bna dy ga separate
        //[Zukhruf, Shahid]
        const [firstName, lastName] = fullname.split(" ");
        this.firstName= firstName;
        this.lastName = lastName;
    }
}

const Person1 = new Person("Ajwa", "Shahid", 20);
console.log(Person1);

// Getter: to call full name method without parenthesis (Person1.fullname())
console.log(Person1.fullName);     //method behaving as property

//Setter

console.log(Person1.firstName);
console.log(Person1.lastName);

//Wanna change 1st and last name after making object we'll use setter
Person1.firstName = "Sarib";
Person1.lastName = "Ali";
console.log(Person1.fullName);

//OR by using setName

Person1.setName("Salar", "Ahmed");
console.log(Person1.fullName);

//OR by using setter 

Person1.fullName="Zukhruf Shahid";  //we want that if it runs then first name and second name changes for this we'll use set method
console.log(Person1);

