let users = [
  { name: "Karol", yearOfBirth: 1988 },
  { name: "Aleksander", yearOfBirth: 1980 },
  { name: "Simon", yearOfBirth: 1978 },
  { name: "Anna", yearOfBirth: 1950 },
  { name: "Ion", yearOfBirth: 1988 },
  { name: "Justin", yearOfBirth: 1998 }
];

// USE REDUCE TO COUNT THE AVERAGE YEAR OF BIRTH FROM ALL OBJECTS IN ARRAY

const averageYear = Math.round(
  users.reduce((average, user, index) => {
    return average + user.yearOfBirth;
  }, 0) / users.length
);
console.log(averageYear);

// USE REDUCE TO GET THE LONGEST NAME FROM ALL OBJECTS IN ARRAY
const longestName = users.reduce((longest, user) => {
  return longest.length > user.name.length ? longest : user.name;
}, "");
console.log(longestName);
