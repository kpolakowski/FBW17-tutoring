const arr = [0, 1, 2, 3, 4];
const copyOfArr = [...arr];
arr.push(2);
console.log("Original", arr);
console.log("Copy", copyOfArr);

const [, second, ...others] = arr;
console.log(second);
console.log(others);

/* showHour();
displayUser();

const formattedString = format(" Welcome to     the    jungle  ");
console.log(formattedString); // BEFORE - 31, AFTER - ?

// console.log("aaaaabbbcdeaaa".replace(/aa+/g,"a"))
 */
