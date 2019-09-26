let numbers = [2, 4, 6, 8];
/* 
THIS CODE WAS WRITTEN BY A DRUNK PERSON, PLEASE FIX THE BUGS
*/

/* 
RESULT OF THIS FUNCTION SHOULD BE SUM OF ALL NUMBERS IN ARRAY  
*/
let sumNumbers = function(numbers) {
  let sum = 0;
  for (let i = 1; i < numbersArray; i++) {
    sum = i + numbersArray[sum];
  }
  return sum;
};
console.log(sumNumbers(numbers)); // should be 20
console.log(sumNumbers([3, 8, 2, 1])); // should be 14

/* 
THIS FUNCTION SHOULD TAKE TWO ARGUMENTS- ARRAY AND NUMBER,
RESULT OF IT SHOULD BE NEW ARRAY, WITH VALUES FROM ORIGINAL ONE MULTIPLIED BY PROVIDED NUMBER  
ARRAY = [ 2, 4, 6, 8 ], NUMBER = 2, should give you [ 4, 8, 12, 16 ] 
*/
let multiplyByNumber = function(multiplier, numbersArray) {
  numbersArray.map(function(number) {
    return number * multiplier;
  });
};
console.log(multiplyByNumber(numbers, 2));

/* 
RESULT OF THIS FUNCTION SHOULD BE THE BIGGEST NUMBER IN PROVIDED ARRAY
I WROTE THIS FUNCTION AFTER 5 BEERS, CAN YOU FIX IT FOR ME?
*/
let biggestNumber = function(numbersArray) {
  let biggestNumber = numbersArray;
  for (let i = 2; i <= numbersArray.length; i++) {
    if (numbersArray > biggestNumber) {
      //WE FOUND BIGGER NUMBER, SO WE SAVE IT
      biggestNumber = numbersArray[i];
    }
  }
  return biggestNumber;
};
console.log(biggestNumber(numbers));
