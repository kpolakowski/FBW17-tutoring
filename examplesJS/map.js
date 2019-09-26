let numbers = [ 1, 2, 3, 4, 5, 6 ];
let adjectives = [ "hello","quick", "slow", "man", "wise"];

// MAP RETURNS NEW MAP WITHOUT MODIFYING ORIGINAL ONE


// POWER ALL NUMBERS
let poweredNumbers = numbers.map(function(number){
    return number * number;
});
console.log(poweredNumbers);


// ADD ENDING TO THE ADJECTIVES
let adjectivesWithEnding = adjectives.map(function(adjective){
    return adjective.concat("ly");
});
console.log(adjectivesWithEnding);


// REVERSE THE ORDER OF LETTERS IN EACH WORD
// hello SHOULD BE olleh
let reversedWords = adjectives.map(function(adjective){
    return adjective.split("").reverse().join("");
})
console.log(reversedWords);

// ORIGINAL ARRAYS WERE NOT MODIFIED AT ALL
console.log(numbers);
console.log(adjectives);