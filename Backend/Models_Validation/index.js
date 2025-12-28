const express = require('express');
const app = express();

// require('./database'); // connect DB BUT FIRST database should be connected then active the listening
const main = require('./database');
const User = require("./user");

const bcrypt = require('bcrypt')

app.use(express.json());

// CRUD
const valid = require('./valid');
// Create data
app.post("/register", async (req,res)=>{
    try{
        // API Validation :-
       valid(req.body);
        // hashing   
       const salt = await bcrypt.genSalt(10);
       req.body.password = await bcrypt.hash(req.body.password,salt);

        await User.create(req.body);// Add info to DB-Collections
        res.send("User Registered SUSSFULLYYY..");
    }catch(err){
        res.status(500).send("ERROR :" + err.message);
    }
})
app.post("/login",async (req,res)=>{
    try{
        // Validate :-
        const person = User.findById(req.body._id);
        if(req.body.email === person.email)
            throw new Error("invalid credential");
        const isAllowed = await bcrypt.compare(req.body.password,people.password);
        if(!isAllowed){
            throw new Error("Invalid credential");
        }
    }catch(err){
        res.status(500).send("ERROR :" + err.message);
    }
})
app.get("/info", async (req,res)=>{
    try{
        const resu = await User.find();
        res.send(resu);
    }catch(err){
        res.status(500).send("ERROR : " + err.message);
    }
})
// send by params : non-senstive Info!
app.get("/user/:id", async (req,res)=>{
    try{
        // authenticate : But we shouldn't call the DB with password like login
        // Session Id ?! : Give a session id when u login and maintain its record.

        // Find id in table/collection -> User
        const resu = await User.findById(req.params.id);
        res.send(resu);
    }catch(err){
        res.status(500).send("ERROR : " + err.message);
    }
})
app.delete("/user/:id", async (req,res)=>{
    try{
        const resu = await User.findByIdAndDelete(req.params.id);
        res.send("Deleted : "+ resu);
    }catch(err){
        res.status(500).send("ERROR :" + err.message);
    }
})
app.patch("/user", async (req,res)=>{
    try{
        // req -> id & changes done, so remove id cause we don't change id to anything
        const {_id, ...update} = req.body;
        await User.findByIdAndUpdate(_id, update, {"runValidater":true}); // _id, updateInfo, runValidater //By default it don't run !!
        res.send("Updated Sususus..");
    }catch(err){
        res.status(500).send("ERROR :" + err.message);
    }
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
