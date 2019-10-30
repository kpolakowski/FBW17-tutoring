# Asynchronous javascript

## Prerequisites

- `books` array
- `printBooks` function
- `printTotalPrice` function

## Callbacks:

1. Create a function, name it `printBooksOfAuthor`.
2. It should take two parameters,

- `author` (string)
- `callback` (function)

3. Grab all books of this specific author from the `books` array, and save it in variable `result`
4. In case `result` contains books of this author, `callback` should be called with `result` as argument
5. In other case just print to the console "No results"

## Promises

1. Create a function, name it `printBooksOfAuthorPr`
2. It should return promise
3. This function should do the same thing as previous one, grabbing all the books of the author, and saving it in `result` variable
4. In case there are books, call `resolve` callback with result as argument
5. In other case call `reject` with string "No results" as argument

## Promisify

1. Import `util` module to our file
2. Use `promisify` method of this module, to create new function returning promises. Name it `printBooksOfAuthorPrUtil`. (Pass `printBooksOfAuthorCb` as argument for promisify)
3. Modify `printBooks` function, by adding err parameter at the beginning

## Calling all 3 versions one after another

1. First call `printBooksOfAuthorCb` with "J.K. Rowling" as argument.
2. Then use `printBooksOfAuthorPr` with name "J.K. Rowling"

   - In case of success first call `printBooks`, and after call `printTotalPrice` (both in separate "then")
   - In case of error print it to the console

3. Then use `printBooksOfAuthorPrUtil` with name "George R.R. Martin"

   - In case of success call `printBooks`
   - In case of error, print it to the console

## Async / await

1. Create a function, name it `callMyFunctions`
2. Make it asynchronous by adding `async` key
3. Move all the code where you call your functions inside of this one
4. Before you call each of functions inside, add `await` keyword
