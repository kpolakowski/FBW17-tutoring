const books = [
  { title: "Makbet", author: "William Shakespeare", price: 10 },
  { title: "Harry Potter 1", author: "J.K. Rowling", price: 15 },
  { title: "Harry Potter 2", author: "J.K. Rowling", price: 20 },
  { title: "A storm of swords", author: "George R.R. Martin", price: 18 },
  { title: "A feast for crows", author: "George R.R. Martin", price: 15 }
];

const printBooks = (err, books) => {
  books.forEach(book => console.log(book));
  return books;
};
const printTotalPrice = books => {
  console.log(books.reduce((sum, book) => sum + book.price, 0));
  return books;
};

const printBooksOfAuthor = (author, callback) => {
  const result = books.filter(book => author === author);
  if (result) {
    console.log("Success");
  } else {
    console.log("No result");
  }
};
