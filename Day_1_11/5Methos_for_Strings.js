
// Methods to work with String

// trim()              to remove spaces from string like, let name="        Ajwa       "; 
// toUpperCase()       whole string characters to upper case
// toLowerCase()       whole string characters to upper case
// slice()             to cut of some characters from string


// trim() 
let nam="        Ajwa       "; 
console.log(nam.length);    //19
nam.trim();   //it'll trim the string like "Ajwa" with no space of 4 
console.log(nam.length);  // it'll again give 19 as nam.trim(); value is not stored in nam varible.so,
nam=nam.trim(); 

// toUpperCase()
let city="pakistan";
city=city.toUpperCase();
console.log(city);


// toLowerCase()
let unit="Rem Em";
unit = unit.toLowerCase();
console.log(unit);      //rem em


// slice()

//start index
//end Index    

let slices="Mangoooo";
slices=slices.slice(0,5); //0 to 5 tk charc print krna baki 5th wala aur us sy agy waly include ni hongy
console.log(slices);     //ifslice(1) pass krein toh string 0 index sy ly ky last index tk sb print kr dy gi
