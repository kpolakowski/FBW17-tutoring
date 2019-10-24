module.exports = (string, help) => {
  //CHECK SPACES
  const spaces = string.indexOf(" ") + string.lastIndexOf(" ") > 0;
  if (spaces) string = string.trim().replace(/\s\s+/g, " ");

  // CHECK HELP FLAG
  if (help === "--help") showHelp();

  //CAPITALIZE
  return capitalizeInitial(string);
};

const capitalizeInitial = string => {
  return string
    .toLocaleLowerCase()
    .split(" ")
    .map(
      word =>
        (word = word[0].toLocaleUpperCase() + word.toLocaleLowerCase().slice(1))
    )
    .join(" ");
};

const showHelp = () => {
  console.log(`How to use this program:
    1. When you input a new string with more than 1 space the program will sanitize it.
    2. If you typed the name of a city without capitalization the program will capitalize it.
    3. If you included a Capitalized letter inside the wrong place of your string the program will sanitize it.`);
};
