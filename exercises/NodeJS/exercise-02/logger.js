const fs = require("fs");
<<<<<<< HEAD

const filename = "messages.log";

const addEntry = (actionName, countArguments) => {
  const date = new Date().toISOString();
  console.log(date);
  const message = `${date},Method ${actionName} was called with ${countArguments} arguments`;
  fs.appendFileSync(filename, message);
};
addEntry();

module.exports = { addEntry };
=======
const filename = "messages.log";

const logAction = (actionName, countArguments) => {
  const date = new Date().toISOString();
  fs.appendFileSync(
    filename,
    `${date}: Method ${actionName} was called with ${countArguments} arguments \n`
  );
};

module.exports = { logAction };
>>>>>>> eca948e446de4c94a24d20638e4ab2cf062f0d48
