const fs = require("fs");
const filename = "messages.log";

const logAction = (actionName, countArguments) => {
  const date = new Date().toISOString();
  fs.appendFileSync(
    filename,
    `${date}: Method ${actionName} was called with ${countArguments} arguments \n`
  );
};

module.exports = { logAction };
