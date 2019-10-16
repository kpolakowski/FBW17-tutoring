let name = "Karol";

// CREATE A SWITCH STATEMENT WITH 3 OPTIONS
// IN CASE name IS EQUAL TO "Karol", PRINT TO THE CONSOLE "Hello Karol"
// IN CASE name IS EQUAL TO "Robert", PRINT TO THE CONSOLE "Hello Robert"
// IN ANY OTHER CASE PRINT TO THE CONSOLE "Unknown user"
function greeting(name) {
  switch (name) {
    case "Karol":
      console.log("Hello Karol");
      break;
    case "Robert":
      console.log("Hello Robert");
      break;
    default:
      console.log("Unknown user");
  }
}
greeting(name);

// CHANGE THE VALUE OF name VARIABLE AND SEE IF STATEMENT WORKS CORRECTLY
name = "Robert";
greeting(name);
