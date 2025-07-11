// __proto__

// offical ecmascript documentation 

// [[prototype]]

// __proto__ ,/ [[prototype]]

const obj1 = {
    key1: "value1",
    key2: "value2"
}

const obj2 = Object.create(obj1); //obj2 __proto__ set to obj1
console.log(obj2.__proto__);       //you'll see properties of Obj1, 