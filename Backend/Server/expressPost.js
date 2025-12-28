const express = require('express');
const app = express();// server created

// Parsing
app.use(express.json());

// Get
app.get("/user", (req,res)=>{
    res.send({
        "name":"Krish",
        "age":23
    })
})

// post 
app.post("/user", (req,res)=>{
    console.log(typeof req.body.age); // undefined If u dont use parsing!
    res.send("Data Saved!");
})

// port
app.listen(400, ()=>{
    console.log("Port : 400");
})

// const response = await fetch('https://api.example.com/data',{
//     method:'POST',
//     headers:{
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         name:'John',
//         age:30
//     })
// })