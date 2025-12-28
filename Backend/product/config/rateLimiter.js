const redisClient = require('./redis');

const windowSize = 2600; // Total time 60min
const MaxReq = 7;

const rateLimiter = async (req,res,next)=>{
    try{
        const key = `IP:${req.ip}`; // IP address
        const current_time = Date.now()/1000; // in sec not milisec
        const window_time = current_time - windowSize; // Window start point

        // Removes all requests older than the time window : By score
        await redisClient.zRemRangeByScore(key, 0, window_time);
        // Counts how many requests are currently in the window
        const numberOfReq = await redisClient.zCard(key);

        if(numberOfReq>MaxReq){
            throw new Error("Number of request excceeded!");
        }
        // Stores the current request
        await redisClient.zAdd(key, [{score:current_time, value: `${current_time}:${Math.random()}`}]);// crpto liberary 

        //If Redis does not receive any new request for this key within windowSize seconds, Redis will automatically delete that key.
        await redisClient.expire(key, windowSize);

        next();
    }catch(err){
        res.send(err.message);
    }
}

module.exports=rateLimiter;