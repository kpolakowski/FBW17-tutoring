<<<<<<< HEAD
const { addEntry } = require("./logger.js");

const users = [];

const args = process.argv.slice(2); // Prendre en compte a partir du troisieme element

console.log(args); //
=======
const { logAction } = require("./logger");
const users = [];

const consoleArguments = process.argv.slice(2);

const addUsers = function(users) {
  logAction(arguments.callee.name, arguments.length);
  users.forEach(user => {
    const [username, age] = user.split(",");
    addUser(username, age);
  });
};

const addUser = function(username, age) {
  logAction(arguments.callee.name, arguments.length);
  users.push({ username, age });
};

const showUsers = function() {
  logAction(arguments.callee.name, arguments.length);
  console.log(users);
};

if (consoleArguments.length > 0) {
  addUsers(consoleArguments);
}

showUsers();
>>>>>>> eca948e446de4c94a24d20638e4ab2cf062f0d48
