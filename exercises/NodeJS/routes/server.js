const http = require("http");
const uuid = require("uuid");
const urlLib = require("url");
const fs = require("fs");

let books = [];
if(fs.existsSync("books.json")){
    books = JSON.parse(fs.readFileSync("books.json"));
}

const server = http.createServer((req,res)=>{
    console.log(req.url);
    console.log(books);
    res.writeHead(200,{
        "content-type":"text/html"
    })
    
    if(req.url==="/books"){
        res.write("<h1>List of the books</h1>");
        books.forEach(book=>res.write(`<div>${book.id} - ${book.title}</div>`))
        res.end(); 
    } else if(req.url==="/api/books"){
        res.writeHead(200,{
            "content-type":"application/json"
        })

        res.write(JSON.stringify({name:"Karol"}));
        res.end();
    } else if(req.url.startsWith("/api/books/add")) {
        const book = {}
        book.id = uuid();
        const params = urlLib.parse(req.url,true).query;
        book.title = params.title;
        books.push(book);
        fs.writeFileSync("books.json",JSON.stringify(books));
        res.end("Book was created");
    } else if(req.url.startsWith("/api/books/update")){
        // TODO
    } else if(req.url.startsWith("/api/books/delete")){
        // TODO
    }else {
        res.statusCode = 404;
        res.end("Path is not correct")
    }
})

server.listen(3000,()=>{
    console.log("Server is running");
});




const extractParams = (url) => {
   let params = url.split("?")[1];
   params = params.split("&").reduce((result,param)=>{
       result[param.split("=")[0]] = param.split("=")[1]
       return result
   },{});
   console.log(params)
}
