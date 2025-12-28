const redisClient = require('./redis');

const windowSize = 2600; // Total time 60min
const MaxReq = 30;

const rateLimiter = async (req,res,next)=>{
    try{
        const key = `IP:${req.ip}`; // IP: address
        const current_time = Date.now()/1000; // in sec not milisec
        const window_time = current_time - windowSize; // Window start point

        // if(count==1){await redisClient.expire(key,3600);} : Set TTL 
        // const count = await redisClient.incr(kep); : keeps counter, first check if exist incr counter by 1 : If don't exist add ip then incr 1. return count!

        // Removes all requests older than the time window : By score
        await redisClient.zRemRangeByScore(key, 0, window_time);// range 0 to window_time
        // Counts how many requests are currently in the window. How many requests happened in the last X seconds
        const numberOfReq = await redisClient.zCard(key);

        if(numberOfReq>MaxReq){
            throw new Error("Number of request excceeded!");
        }

        // Adds a new member to a sorted set with a score.
        await redisClient.zAdd(key, [{score:current_time, value: `${current_time}:${Math.random()}`}]);// crpto liberary 

        //If Redis does not receive any new request for this key within windowSize seconds, Redis will automatically delete that key.
        await redisClient.expire(key, windowSize); // windowsize is in secounds

        next();
    }catch(err){
        res.send(err.message);
    }
}

module.exports=rateLimiter;