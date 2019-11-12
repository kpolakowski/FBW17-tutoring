let classMate = [
  { name: 'Karol', yearOfBirth: 1988 },
  { name: 'Aleksander', yearOfBirth: 1980 },
  { name: 'Simon', yearOfBirth: 1978 },
  { name: 'Anna', yearOfBirth: 1950 },
  { name: 'Ion', yearOfBirth: 1988 },
  { name: 'Justin', yearOfBirth: 1998 }
];

// USE FILTER TO GET ALL OBJECTS REPRESENTING PEOPLE THAT WERE BORN IN THE 1980 OR BEFORE
// SAVE THE RESULT TO ARRAY peopleBefore1980 AND PRINT IT TO CONSOLE
const filteredPeople = classMate.filter(people => {
  return people.yearOfBirth <= 1980;
});
console.log(filteredPeople);
const peopleBefore1980 = [];
