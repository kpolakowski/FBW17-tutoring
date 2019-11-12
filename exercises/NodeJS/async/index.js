<<<<<<< HEAD
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
=======
const util = require("util");

>>>>>>> eca948e446de4c94a24d20638e4ab2cf062f0d48
const books = [
  { title: "Makbet", author: "William Shakespeare", price: 10 },
  { title: "Harry Potter 1", author: "J.K. Rowling", price: 15 },
  { title: "Harry Potter 2", author: "J.K. Rowling", price: 20 },
  { title: "A storm of swords", author: "George R.R. Martin", price: 18 },
  { title: "A feast for crows", author: "George R.R. Martin", price: 15 }
];

<<<<<<< HEAD
const printBooks = books => {
=======
//SCHEME
const printBooks = (err, books) => {
>>>>>>> eca948e446de4c94a24d20638e4ab2cf062f0d48
  books.forEach(book => console.log(book));
};
const printTotalPrice = books => {
  console.log(books.reduce((sum, book) => sum + book.price, 0));
};

const printBooksOfAuthor = (author, callback) => {
  const result = books.filter(book => book.author === author);
  if (result.length > 0) {
    callback(result);
  } else {
<<<<<<< HEAD
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
=======
    console.log("No results");
  }
};

const printBookOfAuthorPr = author => {
  return new Promise((resolve, reject) => {
    const result = books.filter(book => book.author === author);
    if (result.length > 0) {
      resolve(result);
    } else {
      reject("No books found");
    }
  });
};

// PROMISIFY EXPECTS FUNCTION
// THIS FUNCTION NEED TO HAVE A CALLBACK FUNCTION
// THIS CALLBACK FUNCTION NEED TO HAVE 2 PARAMETERS (err,success)
const printBooksOfAuthorPrUtil = util.promisify(printBooksOfAuthor);

//----CALLING OUR FUNCTIONS ------------------------------------
const callMyFunctions = async () => {
  console.log("Callback version---------------");
  printBooksOfAuthor("J.K. Rowling", printBooks);

  console.log("Promise version---------------");
  await printBookOfAuthorPr("J.K. Rowling")
    .then(data => {
      printBooks(null, data);
      return data;
    })
    .then(data => {
      printTotalPrice(data);
      return data;
    })
    .catch(err => {
      console.log("This will be printed in case of reject", err);
    });

  console.log("Promise (Promisify) version---------------");
  printBooksOfAuthorPrUtil("J.K. Rowling")
    .then(data => printBooks(null, data))
    .catch(err => console.log(err));
};

callMyFunctions();
>>>>>>> eca948e446de4c94a24d20638e4ab2cf062f0d48
