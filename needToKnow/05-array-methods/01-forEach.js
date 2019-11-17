let names = ["Karol", "Robert", "Maria", "Ion", "Ajil"];

// USE FOREACH METHOD TO PRINT IN THE CONSOLE GREETING FOR EACH NAME IN ARRAY
// GREETING FORMAT "Hello Karol"

const greetingsToAlles = names.forEach(name => {
  console.log(`Hello ${name}`); // Hello Karol, Hello Robert
});

// USE FOR EACH METHOD TO PRINT TO THE CONSOLE NAMES THAT HAVE ODD INDEX
names.forEach((name, i) => {
  if (i % 2 === 1) {
    console.log(i, name);
  }
});
