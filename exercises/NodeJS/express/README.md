# Express - Exercise #1 - Server & Routing

Objective:
- Getting practice with routing in Express

## Task - Routing, Routing, Routing...

Create a new folder in your projects folder and a server.js file

* Install express via npm install express
* Setup an Express server and let it run on a port
* Provide a success message that the server started up
* Define an array with the DCI course modules at the top of the file:
    ['HTML/CSS', 'JavaScript', 'DOM', 'NodeJS', 'Data Server', 'Fullstack Server', 'Final Project']
* Setup three routes
    * Route /json: Send the whole array as JSON to the browser
    * Route /text: Send the Modules comma separated as string back to the browser, like so => HTML / CSS, JavaScript, DOM, ....
    * Route /html: Send the course entries as HTML list to the browser
* Start the server and test the routes


## Bonus Task #1

* Adapt your route for the HTML module list:
     * The module "Data Server" should get printed with bold text in the browser (so within HTML b tags)


## Bonus Task #2

* Setup a routes directory

    * Create a folder routes
    * Create a file index.js in that folder
        * Create an instance of express.Router() here
        * Move your three routes from server.js to there
        * Also move the modules array to there
        * Attach the three routes to the router
        * Export the router
        * In app.js: Import the router and attach it to the route "/"


### Bonus Task #3

* Setup a controllers directory
    * create a file indexController.js
    * In route index.js:
        * Outsource the module array and your three route functions into the controller file
        * Export the functions and import them in the route index.js file
