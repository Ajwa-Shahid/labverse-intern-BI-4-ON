// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = { };     //Empty object
// Add key value pairs to the object using computed properties

    obj[key1]=value1;
    obj[key2]=value2;

console.log(obj); 

//OR

const obj2 = {
    [key1]: value1,
    [key2]: value2
};