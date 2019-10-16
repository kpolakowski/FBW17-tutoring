let number = 3;

// USE ONLY TERNARY OPERATORS

// CREATE VARIABLE isOdd AND ASSIGN TO IT BOOLEAN INDICATING IF VALUE STORED IN number  IS ODD
let isOdd = number % 2 === 1;
// IF IT IS ODD PRINT TO THE CONSOLE "number is odd" OTHERWISE "number is even"
console.log(isOdd ? "Number is odd" : "Number is even");
// IF TYPE OF number IS NUMBER, PRINT TO THE CONSOLE "this is number" OTHERWISE "this is not number"
console.log(
  typeof number === "number" ? "This is number" : "This is not number"
);
