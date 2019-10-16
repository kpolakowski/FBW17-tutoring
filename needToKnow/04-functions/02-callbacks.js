// CREATE A FUNCTION sayHello TAKING name AS ARGUMENT, AND PRINTING TO THE CONSOLE "Hello " + name + "!"
const sayHello = name => {
  console.log(`Hello ${name}!`);
};
// CREATE SECOND FUNCTION verifyUser, TAKING name AND callback FUNCTION AS PARAMETER
// IN CASE THE name IS EQUAL TO "Karol" THEN EXECUTE THE CALLBACK WITH name AS ARGUMENT
// OTHERWISE PRINT TO THE CONSOLE "Unknown user"
const verifyUser = (name, greeting) => {
  if (name === "Karol") greeting("Karol");
  else console.log("Unknown user");
};
// CALL verifyUser TWO TIMES:
// - WITH "Karol" AND sayHello AS ARGUMENTS
// - WITH "Robert" AND sayHello AS ARGUMENTS
verifyUser("Karol", sayHello);
verifyUser("Robert", sayHello);
