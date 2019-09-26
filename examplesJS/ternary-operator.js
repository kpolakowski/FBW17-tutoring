//TERNARY OPERATORS
let template = ( true ) ? "True case" : "False case";
console.log(template);

let result = ( 10 > 5 ) ? "10 is bigger than 5" : "10 is NOT bigger than 5";
console.log(result);

//NESTED TERNERARY OPERATORS
let mynumber = 5;
let result1 = ( mynumber >= 2 ) ? (mynumber <= 10 ? "Number is between 2 and 10" : "Number is bigger than 10") : "Number is smaller than 2";
console.log(result1);