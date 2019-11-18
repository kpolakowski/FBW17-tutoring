const http = require("http");
const fs = require("fs");

let keyboardStream = process.stdin

let users = [];
fs.readFile("users.json",(err,data)=>{
    users = JSON.parse(data);
    console.log(users)
})

const server = http.createServer((req,res)=>{
    // /users?age=31 === /users
    res.writeHead(200,{
        "content-type":"text/html"
    })
    if(req.url==="/users"){
        res.write("<ul>");
        users.forEach(user=>res.write(`<li>${user.username} - ${user.age}</li>`))
        res.write("</ul>");
        res.end()
    } else if(req.url=="/register"){
        const content = `<form method="post" action="/api/users/add">
            <input autocomplete="off" type="text" name="username" placeholder="username" />
            <input autocomplete="off" type="password" name="password" placeholder="password" />
            <input autocomplete="off" type="number" name="age" placeholder="age" />
            <input type="submit" value="Register" />
            </form>
        `
        res.write(content);
        res.end()
    } else if(req.url=="/api/users/add"){
        const user = {}
        req.on("data",data =>{
            //username=aaaa&password=aaaa&age=31
            
            
            console.log(data.toString())
            data.toString().split("&").forEach(input =>{
                // [ username=aaaa,password=aaaa, age=31 ]
                
                
                // ["username","aaaa"], ["password","aaaa"]
                //-----
                // DESTRUCTURING
                // const[key,value] = input.split("=")
                // DESTRUCTURING
                const key = input.split("=")[0];
                const value = input.split("=")[1]
                console.log(key,value);
                user[key] = value;
            });

            console.log("User was created",user)
            users.push(user);
            fs.writeFileSync("users.json",JSON.stringify(users))
        })
        
        //LOGIC FOR ADDING USER TO AN ARRAY AND FILE
        res.end();
    } else if(req.url==="/login"){

    } else{
        res.statusCode = 400;
        res.end("Resource not found")
    }
    //users
    //login
    //register
    //secret
    //api/users/add
    //api/users/verify

})
server.listen(3000,()=>{
    console.log("Server is listening on port 3000");
});