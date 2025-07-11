// static methods and properties


class Person{

    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    
    static classInfo(){                   //Static Method
        return 'this is person class';
    }

    static desc = "static property";    //Static Property

    //All these methods are related to the objects of this class that'll form after class
    //but we can also make such methods that are direstly related to the class using static keyword
    get fullName(){    
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(fullname){
        const [firstName, lastName] = fullname.split(" ");
        this.firstName= firstName;
        this.lastName = lastName;
    }


    eat(){
        return `${this.Name} is eating `;
    }

    isChild(){
        return this.Age <= 1;               //will return T,F
    }

    isCute(){
        return `Some Persons are Cute`
    }
}


const Person1 = new Person("Ajwa", "Shahid", 20);
console.log(Person1);


//console.log(Person1.classInfo());  //ERROR: we can't access class related methods using objects
//we can access it directly using class name not by defining objectss

console.log(Person.classInfo());   //Static Method Accessing
console.log(Person.desc);         //Static Property Accessing