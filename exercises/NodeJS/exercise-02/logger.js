const fs = require("fs");

const filename = "messages.log";

const addEntry = (actionName, countArguments) => {
  const date = new Date().toISOString();
  console.log(date);
  const message = `${date},Method ${actionName} was called with ${countArguments} arguments`;
  fs.appendFileSync(filename, message);
};
addEntry();

module.exports = { addEntry };
