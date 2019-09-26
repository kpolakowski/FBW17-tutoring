let numbers = [2, 10, 5, 3, 3, 8, 2, 10, 3, 8];
let people = [
  { name: "Sylvester Stallon", age: 60 },
  { name: "Arnold Schwarzeneger", age: 65 },
  { name: "Justin Bieber", age: -10 },
  { name: "Justin Timberlake", age: 35 },
  { name: "Sean Penn", age: 50 },
  { name: "Sean Connery", age: 75 }
];

// WRITE A FUNCTION THAT TAKES TWO ARGUMENTS, ARRAY AND NUMBER, IT SHOULD COUNT OCCURRENCES OF THAT NUMBER IN PROVIDED ARRAY AND RETURN IT

// * FOR APPROACH
let countWithFor = function(numbersArray, searchedNumber) {
  let count = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] === searchedNumber) count++;
  }
  return count;
};
console.log(countWithFor(numbers, 8));
console.log(countWithFor(numbers, 3));
console.log(countWithFor(numbers, 5));

// * FILTER APPROACH
let countWithFilter = function(numbersArray, searchedNumber) {
  return numbersArray.filter(function(item) {
    return item === searchedNumber;
  }).length;
};
console.log(countWithFilter(numbers, 8));
console.log(countWithFilter(numbers, 3));
console.log(countWithFilter(numbers, 5));

// * REDUCE APPROACH
let countWithReduce = function(numbersArray, searchedNumber) {
  return numbersArray.reduce(function(count, number) {
    return number === searchedNumber ? count + 1 : count;
  }, 0);
};
console.log(countWithReduce(numbers, 8));
console.log(countWithReduce(numbers, 3));
console.log(countWithReduce(numbers, 5));

// WRITE A FUNCTION THAT SORTS OBJECTS BY AGE PROPERTY (ASCENDING) AND RETURNS IT AS NEW ARRAY
let sortedByAge = [...people].sort(function(numberA, numberB) {
  return numberA.age - numberB.age;
});
console.log(sortedByAge);

// WRITE A FUNCTION THAT FILTERS THE NAMES HAVING SOME LETTER
let filterNamesWithLetter = function(arrayOfPeople, letter) {
  return arrayOfPeople.filter(function(person) {
    return person.name.includes(letter);
  });
};
console.log(filterNamesWithLetter(people, "z"));
