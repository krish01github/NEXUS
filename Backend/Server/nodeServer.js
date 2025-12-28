const http = require('http'); //http is a module.
const server = http.createServer((req,res)=>{
    // req is the reqest from client
    if(req.url == "/"){
        res.end("stupid");
    }
    else if(req.url == "/contact"){
        res.end("contact");
    }
    else{
        res.end("Erro");
    }
});// server craeted.

server.listen(4000,()=>{
    console.log("I am listening to port Number 4000");
})

