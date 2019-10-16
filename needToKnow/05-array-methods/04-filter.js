let users = [
  { name: "Karol", yearOfBirth: 1988 },
  { name: "Aleksander", yearOfBirth: 1980 },
  { name: "Simon", yearOfBirth: 1978 },
  { name: "Anna", yearOfBirth: 1950 },
  { name: "Ion", yearOfBirth: 1988 },
  { name: "Justin", yearOfBirth: 1998 }
];

// USE FILTER TO GET ALL OBJECTS REPRESENTING PEOPLE THAT WERE BORN IN THE 1980 OR BEFORE
// SAVE THE RESULT TO ARRAY peopleBefore1980 AND PRINT IT TO CONSOLE
const peopleBefore1980 = users.filter(user => user.yearOfBirth <= 1980);
console.log(peopleBefore1980);

// USE FILTER TO GET ALL OBJECTS REPRESENTING PEOPLE THAT HAVE LETTER 's' or 'S' IN THEIR NAMES
// SAVE THE RESULT TO ARRAY namesWithS AND PRINT IT TO CONSOLE
const namesWithS = users.filter(user =>
  user.name.toLocaleLowerCase().includes("s")
);
console.log(namesWithS);
