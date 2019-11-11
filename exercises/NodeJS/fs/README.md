# Working with filesystem

# Prerequisites

Create 2 files:

- index.js
- logger.js

## Part 1

1. Go to file `logger.js` and import `fs` module
2. Create a variable `filename` that is going to store a path to a file where we going to save our entries
3. Create a function called `addEntry`, which should take 2 arguments called `actionName` and `countArguments`
4. This function should append a message to a file specified in `filename`.

   - This message should be in a following format: `<current-date-in-ISO-format>:Method <actionName> was called with <countArguments> arguments` (\*)
   - Each message in a file should be in a separate file

5. Export `addEntry` function

\* check Date Class [documentation](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Date)

## Part 2

1. Go to `index.js` and import logAction method from `logger.js` file
2. Create an empty array called `users`
3. Create a variable `consoleArguments` that is going to store arguments from our console, store only arguments with index bigger or equal 2
4. Create 3 empty functions expressions with following names: addUsers, addUser, showUser
5. Each of this functions should start with calling logAction, with 2 arguments:

- `arguments.callee.name` (which will give us the name of the currently called function)
- `arguments.length` (it will give us number of arguments that were passed while calling)

6. Function `showUsers` should print to the console array `users`
7. Function `addUser` should push to array users object with two properties passed as arguments
8. Function `addUsers` should call `addUser` for each argument passed through console

## Part 3

1. Test your program by calling in the console

- `node index.js` (Without arguments)
- `node index.js` "Karol,30" (One argument)
- `node index.js` "Karol,30" "Robert,30" (Multiple arguments separated with space, each argument should be a name and age, separated with comma, and wrapped with double quotes)
