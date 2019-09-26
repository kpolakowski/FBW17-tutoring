// DIFFERENT WAY TO DECLARE FUNCTIONS
function myFunction(a) {
    console.log(a);
}
let myFunction1 = function(a) {
    console.log(a);
};
let myFunction2 = (a) => {
    console.log(a);
};

myFunction("Karol");
myFunction1("Karol");
myFunction2("Karol");

// SUM TWO NUMBERS
function sumNumbers(a, b) {
    return a + b;
}
console.log(sumNumbers(3, 6));

// CALLBACKS
let add = (a, b) => a + b;
let multiply = (a, b) => a * b;

const calculator = (a, b, callback) => {
    return callback(a, b);
};

console.log(calculator(2, 4, add));
console.log(calculator(2, 4, multiply));

// FUNCTION RETURNING ARRAY WITH PRIME NUMBERS WITHIN A PROVIDED RANGE
function primeNumbers(min, max) {
    if (min < 2) {
        console.log("Must be at least 2");
        return;
    } else {
        let primes = [];
        for (let i = min; i <= max; i++) {
            let prime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    prime = false;
                    break;
                }
            }
            if (prime) primes.push(i);
        }
        return primes;
    }
}
console.log(primeNumbers(2, 100));