const mongoose = require('mongoose');
const {Schema} = mongoose;

async function main(){
    // connect to clustor ! / also at last add the database name : if exist then , don't exist creates one.
    await mongoose.connect("mongodb+srv://krish:%40Krish9611785530@codinglearning.1um5h8j.mongodb.net/Coding");

    // Schema or structure of class type!
    const userSchema = new Schema({
        name:String,
        age:Number,
        city:String,
        gender:String
    })

    // Model/class craete (can also mae object of class)=== collection/table create 
    const User = mongoose.model("Learning",userSchema); // collectionName, schemaName -> collectionName convert to small case & +s at end!!

    // constructor for new data :-
   //const user1 = new User({name:"Krish",age:23,city:"LOLPUR",gender:"Maal"});
    // store in DB :-
   //await user1.save();

    // Or create it directly without object creation:- create & save !
   //await User.create({name:"dhid",age:21,city:"pido",gender:"maal"});

    // Multiple :-create & save in DB
   // await User.insertMany([{name:"dkd",age:21,city:"dd",gender:"fmaal"},{name:"ofojf",age:21,city:"ffkf",gender:"fmaal"},{name:"java",age:21,city:"ops",gender:"maal"}]);

    // --v : 0 // version in DB

    const ans = await User.find({});//Get all documents (rows) from the User collection.
    console.log(ans);
    const ans1 = await User.find({name:"java"}); // whose name is java -> gets that documents/rows
    console.log(ans1);
    
}

main()
.then(()=>console.log("connected"))
.catch(err=>console.log(err));