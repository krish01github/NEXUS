const express = require('express');
const app = express();// server created

// Get
app.get("/user", (req,res)=>{
    res.send({
        "name":"Krish",
        "age":23
    })
})

// port
app.listen(400, ()=>{
    console.log("Port : 400");
})