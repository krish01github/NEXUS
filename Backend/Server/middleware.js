const express = require('express');
const app = express();

// app.use("/user", [()=>{},()=>{}],()=>{}); // Can wrap in array!!!
app.use("/user", (req,res,next)=>{// Only This entire function worked! untill next is used
    console.log("Start");
    console.log("fn 1 : master"); 
    res.send("hello master.");// Can't send multiple response untill request
    // If no response then it keep on request After some TimeOut it stops!
    // call next() to execute next callback fn
    next();
    console.log("fn 1 end : master"); 
    console.log("last");
},(req,res,next)=>{// Don't work ! untill next()
    console.log("fn 2 : master"); 
    // can't send 2 response so don't use res.send() 
    next();
    console.log("fn 2 end : master"); 
},(req,res,next)=>{// each callback fn is called route handler.
    console.log("fn 3 : master"); 
    // next(); //error if nothing next callbackfunction
    console.log("fn 3 end : master"); 
});
// Can write indually next() also still works!! 

app.listen(1000, ()=>{
    console.log("Port 1000 Listening...");
})