const format = require("./formatting");
const showHelp = require("./messaging");
const args = process.argv.slice(2);

console.log(args);

showHelp(args[1]);

console.log(format(args[0]));
