// Table Schema
const mongoose = require('mongoose');
const {Schema} = mongoose;

// If added anything else it will remove that and push to DB!
const userSchema = new Schema({
    name:String,
    age:Number,
    city:String,
    gender:String
})

// TableName/collectionName , schema
const User = mongoose.model("user", userSchema);

module.exports = User;