let classMate = [
  { name: "Karol", yearOfBirth: 1988 },
  { name: "Aleksander", yearOfBirth: 1980 },
  { name: "Simon", yearOfBirth: 1978 },
  { name: "Anna", yearOfBirth: 1950 },
  { name: "Ion", yearOfBirth: 1988 },
  { name: "Justin", yearOfBirth: 1998 }
];

// USE FILTER TO GET ALL OBJECTS REPRESENTING PEOPLE THAT WERE BORN IN THE 1980 OR BEFORE
// SAVE THE RESULT TO ARRAY peopleBefore1980 AND PRINT IT TO CONSOLE
const filteredPeople = classMate.filter(people => {
  return people.yearOfBirth <= 1980;
});
console.log(filteredPeople);
const peopleBefore1980 = [];

//new name
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let cars = [
  { carName: "Citroen", price: 10000 },
  { carName: "Audi", price: 50000 },
  { carName: "BMW", price: 70000 },
  { carName: "Porsche", price: 100000 },
  { carName: "Opel", price: 70000 }
];

const names = ["Karol", "Robert", "Leandro"];

const printNamesWithLetter = letter => {
  return names.filter(name => {
    if (name.includes(letter)) {
      return name;
    }
  });
};

//CASE INSENSITIVE
console.log(printNamesWithLetter("L")); //["Karol", "Leandro"]
console.log(printNamesWithLetter("T")); //["Robert"]
console.log(printNamesWithLetter("E")); //["Robert", "Leandro"]
//CARS THAT HAVE A LETTER 'O' or 'o' in name
