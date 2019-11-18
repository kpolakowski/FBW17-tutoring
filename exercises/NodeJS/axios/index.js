const axios = require("axios");
const url = require("url");
const API_URL = "https://jsonplaceholder.typicode.com/posts";

let arrPosts = []

const fetchingData = async () => {
    try{
        arrPosts = await axios.get(API_URL).then(res=>res.data);
    } catch(err){
        console.log(err)
        return {
            message:err
        }
    }
}



const server = require("http").createServer(async (req,res)=>{
    try{
        res.writeHead(200,{"content-type":"text/html"})
        if(arrPosts.length===0)
            await fetchingData();

        if(req.url==="/posts"){
            //RENDERING
            let structure = "";
            structure += "<ul>";
            arrPosts.forEach(el => {
                structure += `<li><a href="post?id=${el.id}">${el.title}</a></li>`;
            });
            structure += "</ul>";
            res.write(structure)
            res.end()
        } else if(req.url.startsWith("/post")){
            // EXAMPLE 98
            const id = url.parse(req.url,true).query["id"];
            const post = arrPosts.find(post=>post.id == id);
            res.write(`<h1>${post.id} - ${post.title}</h1>`)
            res.write(`<p>${post.body}</p>`)
            res.write(`<a href="/posts">Back to posts</a>`)
            res.end()
        } else {
            res.statusCode = 400;
            res.end("Resource not found");
        }
    }catch(err){
        console.log(err);
    }
    
})

server.listen(3000,()=>{
    console.log("Server is running on port 3000")
})