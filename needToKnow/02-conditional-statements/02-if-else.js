let x = 3;
let y = 4;

let result;
// IF x IS ODD NUMBER, MULTIPLY IT BY y, OTHERWISE INCREMENT IT BY 1
if (x % 2 === 1) result = x * y;
else result = x + 1;
console.log(result);
// IN EACH CASE SAVE THE RESULT TO VARIABLE NAMED result

// IF result IS BIGGER THAN 10 PRINT TO THE CONSOLE "Number is bigger than 10"
// ELSE IF NUMBER IS SMALLER THAN 0 PRINT "Number is smaller than 0"
// ELSE PRINT "Number is between 0 and 10"
if (result > 10) console.log("Number is bigger than 10");
else if (result < 0) console.log("Number is smaller than 0");
else console.log("Number is between 0 and 10");
