const express = require("express");
const path = require("path");
const { capitalizeName, toFullName } = require("./middlewares/custom");
const app = express();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})
app.use(express.urlencoded({ extended:false }))

app.get("/person",(req,res)=>{
    res.sendFile(path.join(__dirname,"public","form.html"))
})
app.get("/handleForm",(req,res)=>{
    console.log(req.query)
    res.end("Handling form goes here")
})

app.post("/person",capitalizeName, toFullName, (req,res)=>{
    console.log(req.fullname)
    //ADD USE TO THE DATABASE
    res.send(`Hello ${req.body.firstname}`)
})