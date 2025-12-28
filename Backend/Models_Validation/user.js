// Table Schema
const mongoose = require('mongoose');
const { Schema } = mongoose;

// If added anything else it will remove that and push to DB!
const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        minLength: 3, // min char
        maxLength: 16
    },
    lastName: {
        type: String
    },
    age: {
        type: Number,
        require: true,
        min: 14,
        max: 70
    },
    gender: {
        type: String,
        // enum:["male","female","others"], // input revived should anyone of this
        // * while using patch/update we have to mention to check validate() also else it will store anything.
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender");
        }
    },
    email: {
        type: String,
        unique:true, // So that data is not repeated again
        require: true,
        trim:true, // remove starting & end spaces.
        lowercase: true, // all char are lowercase
        immutable:true // no changes once added && But doesn't show error if u try update & it won't update - API Level validation
    },
    password: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        default:"xyz.png"
    }
}, {timestamps:true})// To keep track last update & create timing.

// TableName/collectionName , schema
const User = mongoose.model("user", userSchema);

module.exports = User;