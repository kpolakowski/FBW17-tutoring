// CREATE A FUNCTION TAKING TWO numbers AS PARAMETERS AND RETURNING THEIR SUM WITH 3 WAYS:

// - USE A FUNCTION DECLARATION
function sumNumbersDeclaration(a, b) {
  return a + b;
}

// - USE A FUNCTION EXPRESSION
const sumNumbersExpression = function(a, b) {
  return a + b;
};

// - USE AN ARROW FUNCTION
const sumNumbersArrow = (a, b) => a + b;

console.log(sumNumbersDeclaration(2, 2));
console.log(sumNumbersExpression(2, 2));
console.log(sumNumbersArrow(2, 2));
