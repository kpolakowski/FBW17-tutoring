const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync")

//linking local database with db.json file
const adapter = new FileSync("db.json");
const db = low(adapter);

//setting default value for our database
db.defaults({ users:[] }).write()

const addUserForm = (req,res)=>{
    res.send(`
        <form method="post" action="/users/add">
            <input type="text" name="username" />
            <input type="number" name="age" />
            <input type="submit" value="Add new user" />
        </form>
    `)
}

const addUserLogic = (req,res)=>{
    console.log(req.body)
    db.get("users").push(req.body).write();

    res.send(`
        <h1>Form submitted</h1>
        <a href="/users">List of all users</a>
    `)
}

const showUsers = (req,res)=>{
    console.log(req.query.age)
    let users = db.get("users").value();
    if(req.query.age){
        users = users.filter(user=>{
            return user.age===req.query.age
        })
    }
    if(req.query.name){
        users = users.filter(user=>{
            return user.username===req.query.name
        })
    }
    let list = "<ul>";
    users.forEach(user=>{
        list += `<li>${user.username}, ${user.age}</li>`
    })
    list += "</ul>";
    res.send(`
        <h1>List of all users</h1>
        ${list}
        <a href="/users/add">Add new user</a>
    `);
}

module.exports = { addUserForm, addUserLogic, showUsers }