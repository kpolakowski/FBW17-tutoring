let cars = [
  {
    name: "Audi R8",
    color: "red",
    price: 100
  },
  {
    name: "BMW M5",
    color: "black",
    price: 200
  },
  {
    name: "Volkswagen Golf",
    color: "red",
    price: 400
  },
  {
    name: "Nissan GT",
    color: "red",
    price: 300
  },
  {
    name: "Citroen Xsara",
    color: "black",
    price: 500
  },
  {
    name: "Fiat Uno",
    color: "pink",
    price: 1000
  }
];

let people = [
  { name: "Jesus", birth: -30, death: 0 },
  { name: "T1000", birth: 2060, death: 2005 },
  { name: "2PAC", birth: 1970, death: 1992 },
  { name: "Mother Theresa", birth: 1920, death: 2000 }
];

// #1 SUM ALL THE PRICE (REDUCE)
let totalPrice = cars.reduce(function(totalPrice, car) {
  return totalPrice + car.price;
}, 0);
console.log(totalPrice);

// #2 MULTIPLY ALL THE PRICES WITH 100 (MAP)
cars = cars.map(function(car) {
  car.price *= 100;
  return car;
});
console.log(cars);

// #3 FILTER ALL THE CARS THAT PRICE IS BETWEEN 20000 AND 50000 (FILTER)
let filteredCars = cars.filter(function(car) {
  return car.price >= 20000 && car.price <= 50000;
});
console.log(filteredCars);

// #4 RETURN OBJECT WITH COLORS AS KEYS, AND HOW MANY CARS HAVE IT AS VALUE (REDUCE)
let countColors = cars.reduce(function(colors, car) {
  colors[car.color] = colors[car.color] ? ++colors[car.color] : 1;
  return colors;
}, {});
console.log(countColors);

// #5 RETURN ARRAY WITH CAR NAMES THAT CONTAINS STRING PROVIDED AS SECOND PARAMETER (FILTER AND ...)
function getCar(arrayOfCars, carName) {
  return arrayOfCars
    .filter(function(car) {
      return car.name.includes(carName);
    })
    .map(function(car) {
      return car.name;
    });
}
console.log(getCar(cars, "ia"));

// #6 SORT THE CARS BY PRICE ASCENDING (SORT)
console.log(cars);
let i = 0;
let carsSortedByName = cars.sort(function(carA, carB) {
  if (carA.price > carB.price) {
    return 1;
  } else if (carA.price < carB.price) {
    return -1;
  } else {
    return 0;
  }
});
console.log(carsSortedByName);

// #7 SORT THE ARRAY DESCENDING BY THE YEARS THAT PERSON HAS LIVED
let oldestPeople = people
  .map(function(person) {
    person.years = Math.abs(person.death - person.birth);
    return person;
  })
  .sort(function(personA, personB) {
    return personB.years - personA.years;
  });
console.log(oldestPeople);
