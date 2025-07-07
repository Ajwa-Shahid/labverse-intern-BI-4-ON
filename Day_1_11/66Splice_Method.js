// splice method  (to delete or insert in Array)
// start index(from where) , delete(how many) , insert 

const myArray = ['item1', 'item2', 'item3'];

//delete 
//delete item 2

const Delete = myArray.splice(1, 2);   //will change original array
console.log("Deleted item Array: ", Delete);    //it will return an Array
console.log(myArray);

//insert
//(kis index py insert krna, kitny delete krny, what to insert)
const Insert = myArray.splice(1, 0, "Inserted Item 2");  
console.log(Insert);  // insertion doesn't return any value
console.log(myArray); 


// Insert and Delete together
//start(from where) delete(how many) inssert() 
const InsertDelete = myArray.splice(0, 2, "item5", "item6", "item7");
console.log("Deleted items: ", InsertDelete); //as only deleted values are return so 
console.log(myArray);