let numbers = [2, 4, 6, 8, 10];

// USE ONLY FOR LOOP

// PRINT ALL THE ELEMENTS FROM ARRAY
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// PRINT ALL THE ELEMENTS IN REVERSE ORDER
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

// PRINT ELEMENTS WITH ODD INDEX (WITHOUT USING IF STATEMENT)
for (let i = 1; i < numbers.length; i += 2) {
  console.log(numbers[i]);
}
