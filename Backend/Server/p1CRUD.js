const express = require('express');
const app= express();
app.use(express.json());
// If server restart , previous info deleted ! SO data should be stored in secondary memory.
const BookStore = [
    {id:1, name:"HP", author:"DEVFlsu"},
    {id:2, name:"friwnd", author:"dejidje"},
    {id:3, name:"cdjiej", author:"DcdjVFlsu"},
    {id:4, name:"edjiej", author:"DcenkVFlsu"}, // New data not visible only in ram
]

app.get ("/book", (req,res)=>{
    res.send(BookStore);
})

app.get ("/book/:id", (req,res)=>{
    console.log(typeof req.params.id)
    const id = parseInt(req.params.id);
    // const bk = BookStore.find(info => info.id == id)
    res.send(BookStore[id]);
})

app.post ("/book", (req,res)=>{
    BookStore.push(req.body); // req.body have data  
    res.send("New Data Added!");
})

app.listen(4000, ()=>{
    console.log("Listening to port 4000");
});