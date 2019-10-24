module.exports = show => {
  if (show === "--help") {
    console.log(`How to use this program:
        1. When you input a new string with more than 1 space the program will sanitize it.
        2. If you typed the name of a city without capitalization the program will capitalize it.
        3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.`);
  }
};
