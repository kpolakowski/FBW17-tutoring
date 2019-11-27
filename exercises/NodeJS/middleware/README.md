# Express - Exercise - Middleware

## Write me a fullname middleware 

Write me a middleware which will check for firstname and lastname in the body and create a fullname variable

### Setup

* Execute `npm install` (or just short: `npm i`) to install dependencies in the package.json (=> express) 
* Create a server.js file
* In server.js - Setup an express application
* Create a GET route /person
* Create a POST route /person

### Middleware Task

* GET /person: 
    * Return a form here where the user can enter firstname and lastname
    * On submit: Send the data to the POST route /person

* Add a middleware that parses incoming form data into a req.body object
    => app.use(express.urlencoded())

* Add a middleware for the route "/person" which does the following
    * It reads the firstname and lastname from the body
    * It stores it in a new variable "fullname" on the request object (=> req.fullname)

* In POST route /person
    * console.log the fullname variable
    * send the fullname variable as a response to the browser, together with a greeting
    
* Start your app and call the route /person in the browser
    * Enter firstname and lastname in the form and submit it
    * Check, if the fullname is returned to you
