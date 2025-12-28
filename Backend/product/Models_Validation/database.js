const mongoose = require('mongoose');
const {Schema} = mongoose;

async function main(){
    // ✔ Connection is established to clustor -of>  coding database! 
    // ❌ No data is fetched yet, for that run querry!
    const ckey = await mongoose.connect(process.env.DB_CONNECT_KEY); // enviroment .env
    // console.log(ckey)
}

module.exports = main;