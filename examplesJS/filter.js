let numbers = [ 1,2,3,4,5,6,7,8,9,10 ];
let cars = [
    { carName : "Citroen", price: 10000 },
    { carName : "Audi", price: 50000 },
    { carName : "BMW", price: 70000 },
    { carName : "Porsche", price: 100000 },
];

//ODD NUMBERS FROM ARRAY
let oddNumbers = numbers.filter(function(number){
    return number % 2 !== 0;
})
console.log(oddNumbers);

//EVEN NUMBERS FROM ARRAY
let evenNumbers = numbers.filter(function(number){
    return number % 2 === 0;
})
console.log(evenNumbers);

//NUMBERS DIVIDABLE BY 3
let divBy3 = numbers.filter(function(number){
    return number % 3 === 0;
})
console.log(divBy3);

//CARS THAT HAVE A LETTER 'O' or 'o' in name 
let carsWithO = cars.filter(function(car){
    return car.carName.toLowerCase().indexOf('o') !== -1
});
console.log(carsWithO);

//ARRAY OF NUMBERS WAS NOT MODIFIED IN ANY MOMENT
console.log(numbers);