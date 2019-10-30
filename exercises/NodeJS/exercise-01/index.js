const util = require("util");

const books = [
  { title: "Makbet", author: "William Shakespeare", price: 10 },
  { title: "Harry Potter 1", author: "J.K. Rowling", price: 15 },
  { title: "Harry Potter 2", author: "J.K. Rowling", price: 20 },
  { title: "A storm of swords", author: "George R.R. Martin", price: 18 },
  { title: "A feast for crows", author: "George R.R. Martin", price: 15 }
];

//SCHEME
const printBooks = (err, books) => {
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
