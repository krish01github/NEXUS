const redis = require('redis');
const redisClient = redis.createClient({
    username: 'default',
    password: 'mKQpaUCUoU7MsY3G38QWLyXTXHsSImvM',
    socket: {
        host: 'redis-18211.crce182.ap-south-1-1.ec2.cloud.redislabs.com',
        port: 18211
    }
}); // created client

// const connectRedis = async ()=>{ //connect to database
//     await redisClient.connect();
//     console.log("Conneted redis");
// }
// connectRedis();

module.exports = redisClient;



