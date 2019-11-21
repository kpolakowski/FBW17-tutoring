# Express - Exercise #2

## Database Mocking with LowDB

LowDB documentation for your reference:
https://github.com/typicode/lowdb

### Part 1 - DB setup

Write a CLI application 
* Create a file index.js
* npm install lowdb
* Setup lowdb in your code
    * Synchronize it with a file "db.json"
    so that all changes to the lowdb will be written to that file
* Initialize your database with an empty "students" array
* Run your program: Check if the file gets created

### Part 2 - CRUD CLI

* Allow that your program gets called by the following parameters:
    operation, name, nameNew
* Fetch these parameters from the commandline
* Field "Operation" can have these values: 
    read, create, update, delete
    Default operation: read
* Operation Read:
    console.log all students in your DB
* For operations create, update, delete
    * check for a second parameter name
    * Case Create: Add this name to your DB
        * Important: Add the student as an object { name: \<...\>} to the database
    * Case Delete: Delete the student with that name
    * Case Update: Check for a third parameter nameNew
        * Find the entry with the name and overwrite the name with nameNew

## Bonus task (not mandatory)

* Create at least 5 students
* Add another operation "search"
    * Use the second parameter "name" to search for a student
* Update operation "read":
    * Return the names sorted
