

class Animal {

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

// Creating Object of above class using new keyword

const Rabbit = new Animal("Rabbit", 1);
console.log(Rabbit, Rabbit.isChild(), Rabbit.isCute(), Rabbit.Age);