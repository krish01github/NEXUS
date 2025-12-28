const express = require('express');
const app = express();
// require('./database'); // connect DB BUT FIRST database should be connected then active the listening
const main = require('./database');
const User = require("./user");

app.use(express.json());

// CRUD
// see data
app.get("/info", async (req, res) => {
    // Query is executed, Data is transferred over network
    const ans = await User.find({});
    res.send(ans);
})
// send data 
app.post("/info", async (req, res) => {
    try {
        const ans = new User(req.body);//class-obj
        await ans.save();
        // await User.create(req.body);

        res.send("Sussuss updated");
    }
    catch (err) {
        res.status(500).send(err);
    }
})
// del
app.delete("/info", async (req,res)=>{
    // It need to do network call to search & delete from database-collections
    await User.deleteOne({name:"bcthd"});
    res.send("Deleted");
})
// update
app.put("/info", async (req,res)=>{
    // .updateOne(WhichToUpdate , WhatToupdate)
    const result = await User.updateOne({name:"Krish"}, {age:90, city:"banglore"});
    res.send("DONE!");
})

main()
    .then(async () => {
        console.log("connected")
        // Now start listening
        app.listen(2000, () => {
            console.log("2000 is Listening...");
        })

        const ans = await User.find({});// from table user : array of doc/rows
        console.log(ans);
    })
    .catch(err => console.log(err));
