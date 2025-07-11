
class Animal {       //Parent Class, Base Class, Super Class

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


class HORSE extends Animal{          //SubClass, Derived Class
    constructor(Name, Age, Speed){
        super(Name, Age);
        this.Speed= Speed;
    }

    run(){
        return`${this.Name} is running at speed of ${this.Speed}.`
    }
    //Modifications in HORSE's eat method

    eat(){
        return `Modified Eat(): ${this.Name} eats grass.`
    }
} 


const Horse = new HORSE("RiderFury", 15, 80);   //speed property will not be in Animal so will define in HORSE class
console.log(Horse, Horse.isChild(), Horse.isCute(), Horse.Age, Horse.run(), Horse.eat());