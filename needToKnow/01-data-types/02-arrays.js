// CREATE AN EMPTY ARRAY AND SAVE IT TO VARIABLE NAMED DATA
let data = [];
// INSERT INTO DATA ARRAY THESE VALUES IN THE SAME ORDER: 10, false, "javascript", null
data.push(10, false, "javascript", null);
console.log(data);
// INSERT AT THE BEGINNING OF AN ARRAY YOUR NAME
data.unshift("Karol");
// INSERT YOUR AGE RIGHT AFTER YOUR NAME
data.splice(1, 0, 31);
console.log(data);
// PRINT THE FIRST AND LAST ELEMENT OF DATA ARRAY TO THE CONSOLE, SEPARATE THEM WITH COMMA
console.log(data[0], data[data.length - 1]);
// REVERSE THE ORDER OF ALL ITEMS IN ARRAY
data.reverse();
console.log(data);
// REMOVE ITEMS FROM INDEX 0 TO 2 (INCLUDING 2)
data.splice(0, 3);
console.log(data);
// CREATE A SECOND ARRAY FILLED WITH true AND undefined AND SAVE IT TO VARIABLE CALLED DATA2
const data2 = [true, undefined];
// COMBINE ARRAYS DATA AND DATA2 INTO ONE
data = data.concat(data2);
console.log(data);
// REMOVE FROM THE ARRAY ALL FALSY VALUES
data = data.filter(value => !!value);
console.log(data);
