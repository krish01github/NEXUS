const mongoose = require('mongoose');
const {Schema} = mongoose;

async function main(){
    // ✔ Connection is established to clustor -of>  coding database! 
    // ❌ No data is fetched yet, for that run querry!
    await mongoose.connect("mongodb+srv://krish:%40Krish9611785530@codinglearning.1um5h8j.mongodb.net/insta");
}

module.exports = main;