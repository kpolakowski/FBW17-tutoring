let myvalue = true;
let mynumber = 1;

console.log(myvalue);
console.log(mynumber);

// OR
console.log(myvalue || true);

// AND
console.log(myvalue && true);

// NOT OPERATOR
console.log(!myvalue);

// NOT NOT
// IT CONVERTS ANY VALUE TO BOOLEAN
console.log(!!myvalue);

// COMPARING JUST VALUE
console.log(myvalue == true);
console.log(mynumber == "1");

// COMPARING VALUE AND TYPE
console.log(myvalue === false);
console.log(mynumber === "1");

// COMPARING STRINGS
console.log("a" > "b");
console.log("a" > "ab");
console.log("aa" < "ab");
console.log("b" > "a");
console.log("a" > "a");
console.log("a" === "a");