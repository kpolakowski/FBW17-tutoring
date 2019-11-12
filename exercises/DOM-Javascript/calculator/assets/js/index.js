/*********************************************************************
 * EXERCISE
 *********************************************************************
 *
 * Create a function that calculates 2 numbers based on the operation,
 * which should be the first parameter and can have the values:
 * "add", "subtract", "multiply", "divide", "modulo"
 *
 * Then add all the needed JavaScript to calculate the result when the
 * numbers in the input fields change.
 */

/*
 * First we store all available operations in an array.
 *
 * Check the HTML code and you'll see that these strings are used as a
 * pattern to always have 3 input fields per operation:
 * {operation}_1  {operation}_2  {operation}_result
 *
 * Using the same pattern for the IDs of all input fields, we can loop
 * the array of operators and reduce the amount of needed code.
 * We don't need to write the same lines again and again, as we use
 * template literals to combine the operator with the pattern to
 * get all elements by their ID.
 */

/**
 * Returns the result of a mathematical calculation, based on the given
 * operation (add, subtract, multiply, divide, modulo).
 *
 * Examples:
 * calculate("add", 5, 10)       =>  5 + 10 = 15
 * calculate("divide", 100, 20)  =>  100 / 20 = 5
 *
 * @param  {string} operation
 * @param  {number} first       The left value of the operation
 * @param  {number} second      The right value of the operation
 * @return {number}
 */

/* const addNumbers = () => {
  const inputs = document.querySelectorAll("#add input");
  const a = parseFloat(inputs[0].value);
  const b = parseFloat(inputs[1].value);
  inputs[2].value = a + b;
};
const subtractNumbers = () => {
  const inputs = document.querySelectorAll("#subtract input");
  const a = parseFloat(inputs[0].value);
  const b = parseFloat(inputs[1].value);
  inputs[2].value = a - b;
};
const multiplyNumbers = () => {
  const inputs = document.querySelectorAll("#multiply input");
  const a = parseFloat(inputs[0].value);
  const b = parseFloat(inputs[1].value);
  inputs[2].value = a * b;
};
const divideNumbers = () => {
  const inputs = document.querySelectorAll(`#divide input`);
  const a = parseFloat(inputs[0].value);
  const b = parseFloat(inputs[1].value);
  inputs[2].value = a / b;
};
const moduloNumbers = () => {
  const inputs = document.querySelectorAll("#modulo input");
  const a = parseFloat(inputs[0].value);
  const b = parseFloat(inputs[1].value);
  inputs[2].value = a % b;
};

document.querySelectorAll("#add input:not(.result)").forEach(input => {
  input.addEventListener("change", addNumbers);
});
document.querySelectorAll("#subtract input:not(.result)").forEach(input => {
  input.addEventListener("change", subtractNumbers);
});
document.querySelectorAll("#multiply input:not(.result)").forEach(input => {
  input.addEventListener("change", multiplyNumbers);
});
document.querySelectorAll("#divide input:not(.result)").forEach(input => {
  input.addEventListener("change", divideNumbers);
});
document.querySelectorAll("#modulo input:not(.result)").forEach(input => {
  input.addEventListener("change", moduloNumbers);
}); */

const operation = event => {
  const operation = event.target.parentNode.parentNode.id;
  const inputs = document.querySelectorAll(`#${operation} input`);
  const a = parseFloat(inputs[0].value);
  const b = parseFloat(inputs[1].value);

  switch (operation) {
    case "add":
      inputs[2].value = a + b;
      break;
    case "subtract":
      inputs[2].value = a - b;
      break;
    case "multiply":
      inputs[2].value = a * b;
      break;
    case "divide":
      inputs[2].value = a / b;
      break;
    case "modulo":
      inputs[2].value = a % b;
      break;
    default:
      input[2].value = "Incrorrect data";
  }
};

const operations = ["add", "subtract", "multiply", "divide", "modulo"];
operations.forEach(op => {
  document.querySelectorAll(`#${op} input:not(.result)`).forEach(input => {
    input.addEventListener("change", operation);
  });
});
