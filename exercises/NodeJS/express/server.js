const express = require("express")

const port = 3000;

const app = express();

const routes = require("./routes")

app.listen(port,()=>{
    console.log("Server is running on port",port)
})

app.use("/",routes)