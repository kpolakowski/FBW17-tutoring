let names = ["Karol", "Robert", "Maria", "Ion", "Ajil"];

// USE FOREACH METHOD TO PRINT IN THE CONSOLE GREETING FOR EACH NAME IN ARRAY
// GREETING FORMAT "Hello Karol"
names.forEach(name => {
  console.log(`Hello ${name}`);
});

// USE FOR EACH METHOD TO PRINT TO THE CONSOLE NAMES THAT HAVE ODD INDEX
names.forEach((name, index) => {
  if (index % 2 === 1) console.log(name);
});
