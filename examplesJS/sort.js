let numbers = [ 20, 5, 8, 60, 1, 18, 3, 4 ]
let cars = [
    { carName : "Audi", price: 50000 },
    { carName : "Citroen", price: 10000 },
    { carName : "Porsche", price: 100000 },
    { carName : "BMW", price: 70000 }
];

// SORT METHOD IS MUTABLE, SO IF WE APPLY IT TO THE NUMBERS IT WILL CHANGE THE ORDER FOR GOOD

// SORT NUMBERS ASCENDING
let sortedNumbersAsc = numbers.map(item => item).sort(function(a,b){
    return a - b;
});
console.log(sortedNumbersAsc);

// SORT NUMBERS DESCENDING
let sortedNumbersDesc = numbers.map(item => item).sort(function(a,b){
    return b - a;
});
console.log(sortedNumbersDesc);

// SORTING NUMBERS, DEFINING CALLBACK BEFORE CALLING
let sortNumbersAsc = (a,b) => a - b;
let sortNumbersDesc = (a,b) => b - a;

// DESCENDING
let sortedNumbers = [...numbers].sort(sortNumbersDesc);
console.log(sortedNumbers);

// ASCENDING
sortedNumbers = [...numbers].sort(sortNumbersAsc);
console.log(sortedNumbers);




// SORTING ARRAY OF OBJECTS (CARS BY PRICE ASCENDING)
let sortedCarsByPriceAsc = [...cars].sort(function(carA,carB){
    return carA.price - carB.price;
});
console.log(sortedCarsByPriceAsc);

// SORTING ARRAY OF OBJECTS (CARS BY NAMES DESCENDING)
let sortedCarsByNameDesc = cars.sort(function(carA,carB){
    return carA.carName.localeCompare(carB.carName);
    // RETURN 1 IF CAR A NAME COMES AFTER CAR B NAME
    // RETURN 0 IF CAR NAMES ARE THE SAME
    // RETURN -1 IF CAR A NAME COMES BEFORE CAR B NAME
    // return carA.carName < carB.carName ? -1 : (carA.carName > carB.carName ? 1 : 0);
});
console.log(sortedCarsByNameDesc);




// original array should not be changed
console.log(numbers);