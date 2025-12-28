const express = require('express');
const app = express();// server created

app.use("/about/:id", (req,res)=>{
    console.log(req.params);
    res.send(
        {
            "name":"krish",
            "age":20,
            "money":400,
            "Gen":"male",
        }); // Now you get info like API Info
})

app.use("/contact", (req,res)=>{
    res.send(
        {
            "name":"krish",
            "number":"8971787132"
        }); // Now you get info like API Info
})

// Default Page : Cause of this it always show this !
// So put this at last 
app.use("/", (req,res)=>{
    res.send("I am Your Home Page!");
})

// port
app.listen(400, ()=>{
    console.log("Port : 400");
})