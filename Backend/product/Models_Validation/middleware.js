const jwt = require('jsonwebtoken');
const User = require("./user"); 

const redisClient = require('../config/redis');

const userAuth  = async (req,res,next)=>{
    try{
        const Token = req.cookies.Token;
        if(!Token){
            throw new Error("Token dont exist.");
        }
        const payload = jwt.verify(Token, process.env.SHARED_SECRET_KEY); // return payload

        const {_id} = payload;
        if(!_id){
            throw new Error("_id dont exist.");
        }

        const resu = await User.findById(_id);// return document/row/object
        if(!resu){
            throw new Error("User dont exist.");
        }

        // combine resu in req
        req.resu = resu;

        // If token in block list redis
        const isBlocked = await redisClient.exists(`token:${Token}`);// key is passed
        if(isBlocked){
            throw new Error("Invalid Token ");
        }
        next();
    }catch(err){
        res.status(500).send("ERROR : " + err.message);
    }
}

module.exports = userAuth;