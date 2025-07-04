// Undefined (jb variable bna dein and usko koi value assign na krein toh,later on can assign )

let un_defined;
console.log(typeof un_defined); 

var not_defined;
console.log(typeof not_defined);

// Not possible by const as it gives error if no value assigned  (SyntaxError: Missing initializer in const declaration)

// const must_assign;      
// console.log(typeof must_assign);

un_defined="defined by string now";
console.log(typeof un_defined, un_defined);     //assigned value to undefined now its string 