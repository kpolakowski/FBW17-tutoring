let numbers = [ 5, 10, 15, 25, 30 ];

// SUM OF NUMBERS FROM ARRAY
let sum = numbers.reduce(function(sum, current){
    console.log("Current value of sum - ",sum);
    console.log("Current item", current);
    return sum + current;
},0);
console.log("Sum of all numbers in array equals to",sum);




// SUM OF NUMBERS FROM OBJECTS STORED IN ARRAY
let cars = [
    { 
        name : "Citroen",
        price : 10000
    },
    { 
        name : "Audi",
        price : 40000
    },
    { 
        name : "BMW",
        price : 50000
    },
    { 
        name : "VW",
        price : 20000
    },
    { 
        name : "Porsche",
        price : 100000
    },
];
sum = cars.reduce(function(sum,current){
    console.log("Current value of sum - ",sum);
    console.log("Current item", current);
    console.log("Current item's price", current.price);
    return sum + current.price;
},0);
console.log("Sum of all numbers from objects stored in array equals to",sum);