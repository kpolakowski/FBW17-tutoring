module.exports = sentence => {
  /* const moreThenOneSpace =
    sentence.indexOf(" ") !== -1 &&
    sentence.indexOf(" ") !== sentence.lastIndexOf(" "); */

  return sentence.trim().replace(/\s\s+/g, " ");
  // return moreThenOneSpace ? sentence.trim().replace(/\s\s+/g, " ") : sentence;
};

const capitalizeInitial = sentence => {
  return sentence
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
