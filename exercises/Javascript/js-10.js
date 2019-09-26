// HAVING THIS ARRAY
let numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "seventeen",
  "six",
  "seven",
  "eight",
  "nine",
  "ten"
];

// CREATE OBJECT WITH ARRAY VALUES AS PROPERTY/KEY,
// AND NUMERICAL VALUES OF THAT NUMBERS AS VALUES
/* 
{
    "one":1,
    "two":2,
    "three":3,
    "four":4,
    "five":5,
    "six":6,
    "seven":7,
    "eight":8,
    "nine":9,
    "ten":10
} 
*/

let mynumbers = {};
for (let i = 0; i < numbers.length; i++) {
  console.log(i, numbers[i]);
  mynumbers[numbers[i]] = i + 1;
}
console.log(mynumbers);

// ARRAY OF OBJECTS REPRESENTING STUDENTS
let classMates = [
  { firstName: "Mojgan", lastName: "Polakowski", age: 30 },
  { firstName: "Davide", lastName: "De Feudis", age: 35 },
  { firstName: "Maria", lastName: "Nanakou", age: 40 },
  { firstName: "Nic", lastName: "Solitom", age: 32 },
  { firstName: "Christophe", lastName: "Troudart", age: 23 },
  { firstName: "Balazs", lastName: "Danyadi", age: 33 },
  { firstName: "Naima", lastName: "Adan Ahmed", age: 29 },
  { firstName: "Givara", lastName: "Mahfoud", age: 25 },
  { firstName: "Karol", lastName: "Vafa", age: 18 },
  { firstName: "Ion", lastName: "Lazarev", age: 30 },
  { firstName: "Leon-Arno", lastName: "Rimrod", age: 30 },
  { firstName: "Itamar", lastName: "Givon", age: 35 }
];

// CHECK IF ARRAY CONTAINS OBJECT WITH PROPERTY NAME EQUAL TO "Mojgan"
let myversion = classMates.reduce((hasMojgan, student) => {
  console.log(hasMojgan);
  return student.firstName === "Mojgan" ? true : hasMojgan;
}, false);
console.log(myversion);

