// const books = [
//   { title: "Makbet", author: "William Shakespeare", price: 10 },
//   { title: "Harry Potter 1", author: "J.K. Rowling", price: 15 },
//   { title: "Harry Potter 2", author: "J.K. Rowling", price: 20 },
//   { title: "A storm of swords", author: "George R.R. Martin", price: 18 },
//   { title: "A feast for crows", author: "George R.R. Martin", price: 15 }
// ];

// const printBooks = books => {
//   books.forEach(book => console.log(book));
//   return books;
// };
// const printTotalPrice = books => {
//   console.log(books.reduce((sum, book) => sum + book.price, 0));
//   return books;
// };

// const printBooksOfAuthor = (author, callback) => {
//   const result = books.filter(book => book.author === author);
//   if (result.length > 0) {
//     callback(result);
//   } else {
//     console.log("No result");
//   }
// };
// printBooksOfAuthor("J.K. Rowling", printBooks);

// Avec Promise

// const books = [
//   { title: "Makbet", author: "William Shakespeare", price: 10 },
//   { title: "Harry Potter 1", author: "J.K. Rowling", price: 15 },
//   { title: "Harry Potter 2", author: "J.K. Rowling", price: 20 },
//   { title: "A storm of swords", author: "George R.R. Martin", price: 18 },
//   { title: "A feast for crows", author: "George R.R. Martin", price: 15 }
// ];

// const printBooks = books => {
//   books.forEach(book => console.log(book));
//   return books;
// };
// const printTotalPrice = books => {
//   console.log(books.reduce((sum, book) => sum + book.price, 0));
//   return books;
// };

// const printBooksOfAuthor = (author, callback) => {
//   const result = books.filter(book => book.author === author);
//   if (result.length > 0) {
//     callback(result);
//   } else {
//     console.log("No result");
//   }
// };
// printBooksOfAuthor("J.K. Rowling", printBooks);

// const printBooksOfAuthorPr = author => {
//   return new Promise((resolve, reject) => {});
//   const result = books.filter(book => book.author === author);
//   if (result.length > 0) {
//     resolve(result);
//   } else {
//     reject("No book found");
//   }
// };

// printBooksOfAuthorPr("J.K. Rowling")
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log("This will be printed in case of reject", err);
//   });

//Avec promisify

const util = require("util");
const books = [
  { title: "Makbet", author: "William Shakespeare", price: 10 },
  { title: "Harry Potter 1", author: "J.K. Rowling", price: 15 },
  { title: "Harry Potter 2", author: "J.K. Rowling", price: 20 },
  { title: "A storm of swords", author: "George R.R. Martin", price: 18 },
  { title: "A feast for crows", author: "George R.R. Martin", price: 15 }
];

const printBooks = books => {
  books.forEach(book => console.log(book));
  return books;
};
const printTotalPrice = books => {
  console.log(books.reduce((sum, book) => sum + book.price, 0));
  return books;
};

const printBooksOfAuthor = (author, callback) => {
  const result = books.filter(book => book.author === author);
  if (result.length > 0) {
    callback(result);
  } else {
    console.log("No result");
  }
};

const printBooksOfAuthorPr = author => {
  return new Promise((resolve, reject) => {});
  const result = books.filter(book => book.author === author);
  if (result.length > 0) {
    resolve(result);
  } else {
    reject("No book found");
  }
};

printBooksOfAuthorPr("J.K. Rowling")
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log("This will be printed in case of reject", err);
  });

const printBooksOfAuthorPrUtil = util.promisify(printBooksOfAuthor);

console.log("Callback version--------");
console.log("Callback version--------");
console.log("Promise version--------");
printBooksOfAuthor("J.K. Rowling")
  .then()
  .catch();
