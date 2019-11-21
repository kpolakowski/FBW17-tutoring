//importing modules that we will use
const express = require("express");
const morgan = require("morgan");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync")

//linking local database with db.json file
const adapter = new FileSync("db.json");
const db = low(adapter);

//setting default value for our database
db.defaults({ users:[] }).write()

//setting up express server
const app = express();

//applying middleware
app.use(express.urlencoded({ extended:true }))
    .use(morgan("dev"))

//---------------
// DEFINE YOUR ROUTES HERE

app.get("/users",async (req,res)=>{
    let filtered = db.get("users").value()
    let query = req.query;
    if(query["minAge"]){
        filtered = filtered.filter(user=>user.age>=query["minAge"])
    }
    if(query["age"]){
        filtered = filtered.filter(user=>user.age==query["age"])
    }
    let list = "<ul>";
    filtered.forEach(user=>list+=`<li>${user.username},${user.age}</li>`)
    list +="</ul>";

    res.send(`
        ${list}
        <a href="/users/add">Add new user</a>
    `)
})

app.get("/users/add",(req,res)=>{
    res.send(`
    <h1>Here we can add users</h1>
    <form action="/users/add" method="post">
        <label for="username">Username</label>
        <input type="text" name="username" id="">
        <label for="age">Age</label>
        <input type="number" name="age" id="">
        <input type="submit" value="Add user">
    </form>
    `);
})

app.post("/users/add",(req,res)=>{
    db.get("users").push(req.body).write();
    res.send(`
        <h1>User was created successfully</h1>
        <a href="/users">Back to list of all users</a>
    `);
})

//---------------
app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})