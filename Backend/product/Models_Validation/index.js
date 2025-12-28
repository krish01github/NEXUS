// .env
require('dotenv').config();
// console.log(process.env);// all keys/Enviro-varible present init.


const express = require('express');
const app = express();// server 

const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

// ExpressRouter
const authRouter = require('../modules/logout');

// require('./database'); // connect DB BUT FIRST database should be connected then active the listening
const main = require('./database');
const User = require("./user"); 
// redis
const redisClient = require('../config/redis');

app.use(cookieParser());
app.use(express.json());

const valid = require('./valid');

// CRUD
// Same code for validation in every function/API : MiddleWare ! 
app.use("/logout",authRouter );
const userAuth = require('./middleware');
const rateLimiter = require('../config/rateLimiter');
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
        // const person = await  User.findById(req.body._id);// search from email - unique
        const person = await User.findOne({email:req.body.email});
        if(req.body.email !== person.email)
            throw new Error("invalid credential");

        const isAllowed = await bcrypt.compare(req.body.password, person.password);
        if(!isAllowed){
            throw new Error("Invalid credential");
        }

        // JWT Token: header will get included auto ! Here you can send _id 
        // "jiji" is shared key -> used for both sign & verifies.
        const token = jwt.sign({_id:person._id, email:person.email}, process.env.SHARED_SECRET_KEY, {expiresIn:1800}); //jwt.sign(payload, key, expireTime) && no need to give await
        res.cookie("Token",token);// key - value/token

        res.send("Login Susususs");
    }catch(err){
        res.status(500).send("ERROR :" + err.message);
    }
})
app.get("/info", async (req,res)=>{
    try{
        const resu = await User.find();

        // cookies verfy 
        const payload = jwt.verify(req.cookies.Token, process.env.SHARED_SECRET_KEY); // jwt.verify(actualTokenValue, key); // return payload!!
        console.log(payload);// iat: -> when did this token generated! && expiry also !
        console.log(req.cookies);// undefined cause we need to first parse.

        res.send(resu);
    }catch(err){
        res.status(500).send("ERROR : " + err.message);
    }
})
// send by params : non-senstive Info!
app.get("/user",userAuth, async (req,res)=>{ //id ->  get by payload 
    try{
        // authenticate : But we shouldn't call the DB with password like login
        // Session Id ?! : Give a session id when u login and maintain its record.

        // Find id in table/collection -> User

        // Middleware!

        res.send(req.resu);
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

const InitializeConnection = async ()=>{
    try{
        // await redisClient.connect();
        // console.log("Conneted redis");
        // await main(); // don't go to next untill connected
        // console.log("Conneted Mongo database");

        await Promise.all([redisClient.connect(), main()]);
        console.log("connected DB");

        app.listen(process.env.PORT, () => {
            console.log("2000 is Listening...");
        })
    }catch(err){
        console.log("ERROR : "+err.message);
    }
}
InitializeConnection();
// main()
//     .then(async () => {
//         console.log("connected")
//         // Now start listening
//         app.listen(process.env.PORT, () => {
//             console.log("2000 is Listening...");
//         })

//         const ans = await User.find({});// from table user : array of doc/rows
//         // console.log(ans);
//     })
//     .catch(err => console.log(err));
