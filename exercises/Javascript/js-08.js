let numbers = [2, 19, 18, 5, 9, 1, 10, 3];

/* #1 write a function that takes array of numbers as argument, and returns object that will tell me how many odds and even numbers there are inside
This is how result should look:
{
    odd:5,
    even:3
} */

function countOddEven(arrayOfNumbers) {
  return arrayOfNumbers.reduce(
    function(result, current) {
      // ONE LINE SOLUTION
      // (current%2===0) ? result['even']++ : result['odd']++;
      if (current % 2 === 0) {
        result["even"]++;
      } else {
        result["odd"]++;
      }
      return result;
    },
    { even: 0, odd: 0 }
  );
}
console.log(countOddEven(numbers));

let mixedArray = [2, 4, "name", true, [], "tutor", 5, { name: "Karol" }];
/* #2 Write a function takes array as argument and returns object that will tell me how many elements of each type this array contains
{
    number: 3,
    string: 2,
    boolean: 1,
    object: 2
} */
function checkTypes(numbersArray) {
  return numbersArray.reduce((result, current) => {
    // ONE LINE SOLUTION
    // result[typeof current] = (!result[typeof current] ? 1 : ++result[typeof current]);
    if (!result[typeof current]) {
      result[typeof current] = 1;
    } else {
      result[typeof current]++;
    }
    return result;
  }, {});
}
console.log(checkTypes(mixedArray));

let people = [
  { name: "Karol", age: 20, country: "Poland" },
  { name: "Robert", age: 25, country: "Germany" },
  { name: "Martina", age: 22, country: "Germany" },
  { name: "Ajil", age: 30, country: "Syria" },
  { name: "Mor", age: 23, country: "Israel" }
];

/* #3 Write a function that takes two arguments - name of the person, and country  that should be updated for that person, for example changeCountry("Karol","Germany");
 ...
{ name:"Karol", age:20, country: "Germany" },
...*/
function updateProperty(personName, key, newValue) {
  people.find(person => person.name === personName)[key] = newValue;
}
updateProperty("Karol", "country", "Germany");
console.log(people);
updateProperty("Karol", "age", 19);
console.log(people);
