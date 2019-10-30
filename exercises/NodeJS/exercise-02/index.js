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
