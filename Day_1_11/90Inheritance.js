

class Animal {       //Parent class, Base Class, Super class

    constructor(Name, Age){
        this.Name = Name;
        this.Age = Age;
    }

    eat(){
        return `${this.Name} is eating `;
    }

    isChild(){
        return this.Age <= 1;               //will return T,F
    }

    isCute(){
        return `Some Animals are Cute`
    }
}

class Cat{
    
    constructor(Name, Age){
        this.Name = Name;
        this.Age = Age;
    }

     eat(){
        return `${this.Name} is eating `;
    }

    isChild(){
        return this.Age <= 1;
    }

    isCute(){
        return `Some Animals are Cute`
    }
}

const Tom = new Cat("Tom", 5);
console.log(Tom, Tom.isChild(), Tom.isCute(), Tom.Age);


// Both classes are same we can use ANimal class to create Cat class instead of reoitition

class HORSE extends Animal{          //SubClass, Derived Class: will take all properties and methods from Animal class due to extends

} 

const Horse = new HORSE("RiderFury", 15);
console.log(Horse, Horse.isChild(), Horse.isCute(), Horse.Age);