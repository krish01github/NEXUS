const express = require('express');
const authRouter =  express.Router();

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const redisClient = require('../config/redis');

const rateLimiter = require('../config/rateLimiter');

const userAuth = require('../Models_Validation/middleware');
// We had token -> we hit logout API 
// logout
authRouter.post("/",rateLimiter,userAuth, async (req,res)=>{
    try{
        // Delete token:
        // 1 : send Invalid token. 
        // res.cookie("Token", "fggf");//jwt malf after this logout! cause while verify it fails !
        // 2 : expire cookies : cause token is in cookies -> Token maynot actually be expire just got removed from cookies!?
        // res.cookie("Token", null ,{expires: new Date(Date.now())}) ;// tokenName , null/"anything" , whenExpire
        // 3 : make a list of blocked token in DB ! After that token timeLimit remove it from DB!
        // 3.1 Delete from DB + 3.2 Call to DB to checks if blocked
        // 4 : REDIES : DATABASE : VeryFast! cause it work in RAM(volatile) cause we don't store permanent .
        //     Redies will have blocked token + there timeStamp 
        const token = req.cookies.Token;// token 
        const payload = jwt.decode(token)// brings payload
        await redisClient.set(`token:${token}`, "Block");// key-as-token,value 
        await redisClient.expireAt(`token:${token}`, payload.exp);    
        // await redisClient.expire(`token:${token}`, ); // key-as-token,time

        res.send("logged out susessfuly.");
    }catch(err){
        res.send("ERROR : " + err.message);
    }
})

module.exports = authRouter;