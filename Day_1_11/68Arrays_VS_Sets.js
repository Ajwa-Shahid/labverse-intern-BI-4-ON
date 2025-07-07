// Sets (it is iterable) 
// const set_name = new Set(can add any iterable);
// store data (no duplicate storage only stores unique item)
// No index-based access 
// Order is not Guaranteed
// USE: when u have only Unique values eg ID'S

//Adding Array Iterable
const numbersSet = new Set([1,2,3,3]);       //set having 3 elements 1,2,3,4 but will store only 3 ele cuz 3 is duplicated 
console.log(typeof numbersSet, numbersSet);
console.log(numbersSet[1]);                 //undefined as No index-based access 

//Adding String Iterable
const stringSet =new Set ("Salar Ahmed");
console.log(stringSet);

//Adding in Empty set

const items = ['item1', 'item2', 'item3'];
const Empty_set = new Set ();
Empty_set.add(1);      
Empty_set.add(2);      
Empty_set.add(2);      //will not add duplicated value
Empty_set.add(items);
Empty_set.add(items);   //will not add duplicated Array, Array of same Address
Empty_set.add([1,2,3,4,5]); 
Empty_set.add([1,2,3,4,5]);   //both will add as both are diff arrays in memory, jb bhi [] lga ky array bnayein toh memory mein aik new array bny ga doesn't matter usky elements kisi aur array sy same hein yan ni 

console.log(Empty_set);

//To check if there's any element present in Set

console.log(Empty_set.has(1));   //true

if(Empty_set.has(1)){
    console.log("1 is present")
}else{
    console.log("1 is not present")
}

//Set is Iterable 

for (let elements of Empty_set){
    console.log(elements);
}

//Task: get Unique elements of array

const array = [1,2,3,3,4,5,5,6,7,8,8];
const UniqueElements = new Set (array);
console.log(UniqueElements);       //we can't use length property here
console.log(array); 

//Task: Find the length of UniqueElements

let length= 0;
for (let elements of UniqueElements){
    length++;
}
console.log(length);