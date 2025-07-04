// break keywork

for(let i = 1; i<=10; i++){
    if(i===4){
        break;     //break stopped for loop executiona and made the execution jump outside the loop
    }
    console.log(i);
}
console.log("Execution jumps to outside the loop");

// continue keyword 

for(let i = 1; i<=10; i++){
    if(i===4){
        continue;     //will take execution upwards (let i = 1; i<=10; i++) not even will print console.log(i); so 4 will not print after updation 5 will print 
    }
    console.log(i);
}
console.log("Execution jumps to upwards the loop");