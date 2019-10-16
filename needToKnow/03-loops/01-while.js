let numbers = [2, 4, 6, 8, 10];

// USE ONLY WHILE LOOP

// PRINT ALL ELEMENTS FROM ARRAY numbers TO THE CONSOLE
let i = 0;
while (i < numbers.length) {
  console.log(numbers[i]);
  i++;
}
// REVERSE THE ORDER OF ALL ELEMENTS FROM ARRAY numbers
i = numbers.length - 1;
while (i >= 0) {
  console.log(numbers[i]);
  i--;
}
// SUM NATURAL NUMBERS UNTIL THE SUM IS BIGGER OR EQUAL 100,
i = 1;
let sum = 0;
while (sum < 100) {
  sum += i;
  i++;
}
console.log(sum);
// PRINT TO THE CONSOLE HOW MANY NUMBERS WERE SUMMED
console.log(i);
