let numbers = [2, 8, 3, 7, 20, 5, 15, 1, 2];

// Write a `function` that return `sum` of all numbers from array provided as an argument.
let sumNumbers = array => array.reduce((sum, number) => sum + number, 0);
console.log(sumNumbers(numbers));

// Write a `function` that return the `smallest` number in array provided as an argument.

let smallestReduce = arrayOfNumbers =>
  arrayOfNumbers.reduce((smallest, number) =>
    smallest < number ? smallest : number
  );
let smallestSort = arrayOfNumbers =>
  arrayOfNumbers.sort((numberA, numberB) => numberA - numberB)[0];
console.log(smallestReduce(numbers));
console.log(smallestSort(numbers));

// Write a `function` that return the `biggest` number in array provided as an argument.
let biggestReduce = arrayOfNumbers =>
  arrayOfNumbers.reduce((biggest, number) =>
    biggest > number ? biggest : number
  );
let biggestSort = arrayOfNumbers =>
  arrayOfNumbers.sort((numberA, numberB) => numberB - numberA)[0];
console.log(biggestReduce(numbers));
console.log(biggestSort(numbers));

// Write a `function` that return the `average` of all numbers in array provided as an argument.
let average = arrayOfNumbers =>
  sumNumbers(arrayOfNumbers) / arrayOfNumbers.length;
console.log(average(numbers));

// Write a `function` that return the `average of smallest and biggest` numbers in array provided as an argument.
let averageSB = arrayOfNumbers =>
  (smallestReduce(arrayOfNumbers) + biggestReduce(arrayOfNumbers)) / 2;
console.log(averageSB(numbers));

// Write a `function` that takes array, number to search and minimum number of occurrences to check as arguments. It should return true in case number is in the array. Otherwise it should return false.
let containNumber = (arrayOfNumbers, number, min) =>
  arrayOfNumbers.filter(a => a === number).length > min - 1;
console.log(containNumber(numbers, 2, 1));
console.log(containNumber(numbers, 2000, 1));
console.log(containNumber(numbers, 20, 1));

// Use previous `function` to check if there are `duplicated` values in an array.
console.log(containNumber(numbers, 2, 2));
console.log(containNumber(numbers, 20, 2));
