let numbers = [2, 4, 6, 8, 10];

// USE MAP TO MULTIPLY EACH NUMBER IN ARRAY BY 10
// SAVE THE RESULT AS NEW ARRAY CALLED numbersBy10
const numbersBy10 = numbers.map(num => {
  return num * 10;
});
console.log(numbersBy10);

let users = [
  { name: "Karol", yearOfBirth: 1988 },
  { name: "Aleksander", yearOfBirth: 1980 },
  { name: "Simon", yearOfBirth: 1978 },
  { name: "Anna", yearOfBirth: 1950 },
  { name: "Ion", yearOfBirth: 1988 },
  { name: "Justin", yearOfBirth: 1998 }
];

// USE MAP TO ADD NEW PROPERTY TO EACH OBJECT IN ARRAY
// PROPERTY SHOULD CONTAIN THE AGE OF THE PERSON THAT OBJECT IS REPRESENTING
