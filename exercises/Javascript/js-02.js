let sentence = "Hello world. This is my first amazing string.";
let vowels = "aeiouy";

// WRITE A FUNCTION THAT RETURN SENTENCE WITH CAPITALIZED WORDS
let capitalize = sentence =>
  sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
console.log(capitalize(sentence));

// WRITE A FUNCTION THAT RETURNS NUMBER OF VOWELS IN SENTENCE
let countVowels = sentence
  .split("")
  .filter(letter => vowels.indexOf(letter) !== -1).length;
console.log(countVowels);

// WRITE A FUNCTION THAT REVERSE THE LETTERS ORDER OF EACH WORD IN SENTENCE
let reversedWords = sentence
  .split(".")
  .map(splittedSentence => {
    return splittedSentence
      .split(" ")
      .map(word => {
        return word
          .split("")
          .reverse()
          .join("");
      })
      .join(" ");
  })
  .join(".");
console.log(reversedWords);

// FIND AND PRINT THE LONGEST WORD IN SENTENCE
let longestWord = sentence.split(" ").reduce((longest, word) => {
  return longest.replace(".", "").length > word.replace(".", "").length
    ? longest
    : word;
});
console.log(longestWord);

// TRANSFORM FUNCTION FROM FIRST TASK TO A STRING PROTOTYPE METHOD
String.prototype.capitalize = function() {
  return this.split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
console.log(sentence.capitalize());

// REMEMBER! SENTENCE SHOULD NOT CHANGE AT ANY MOMENT
console.log(sentence);
