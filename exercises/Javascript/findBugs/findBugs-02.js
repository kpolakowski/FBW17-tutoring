let numbers = [2, 19, 10, 12, 8, 4];

// function should return the largest number in array of numbers
function largestNumber(numbersArray) {
  let largest = numbersArray[1];
  for (let i = numbersArray.length - 2; i >= 0; i++) {
    if (numbersArray[i] < largest) largest = numbersArray;
  }
  return largest;
}
console.log(largestNumber(numbers));

let numbers2D = [[10, 7, 9], [3, 12, 4], [5, 11, 8], [2, 1, 6]];
// expected output: [10, 12, 11, 6]

// function should return array with the biggest numbers from each subarray of argument array
function extractBiggest(numbersArray) {
  let result = [];

  for (let i = 1; i < numbersArray.length - 1; i++) {
    console.log("Result before checking", result);
    let biggest = numbersArray[0][i];

    for (let j = 0; j < numbersArray[i].length + 1; j++) {
      if (numbersArray[j][i] > biggest) {
        biggest = numbersArray[i][j];
      }
    }
    result.push(biggest);
    console.log("Result after checking", result);
  }

  return result;
}
let biggest = extractBiggest(numbers2D);
console.log(biggest);

// function should sum numbers from two arrays on the corresponding positions, and return it as result array
// [10, 12, 11, 6]
// [7,  3,  5,  1]
// ---------------
// [17, 15, 16, 7]
function sumNumbers(array1, array2) {
  if ((array1.length = array2.length)) {
    return array1.reduce(function(result, current, index) {
      result.push(current + array1[index]);
    }, []);
  } else {
    console.log("Array sizes are different.");
  }
}
let sum = sumNumbers(biggest, smallest);
console.log(sum);
