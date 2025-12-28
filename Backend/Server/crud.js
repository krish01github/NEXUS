const express = require('express');
const app= express();
app.use(express.json());// Middle ware

// If server restart , previous info deleted ! SO data should be stored in secondary memory.
const BookStore = [
    {id:1, name:"HP", author:"DEVFlsu"},
    {id:2, name:"friwnd", author:"dejidje"},
    {id:3, name:"cdjiej", author:"DcdjVFlsu"},
    {id:4, name:"edjiej", author:"DcenkVFlsu"}, // New data not visible only in ram
    {id:5, name:"jddj", author:"DcenkVFlsu"}, // New data not visible only in ram
]

app.get ("/book", (req,res)=>{ // localhost:400/book?author=DcenkVFlsu
    console.log(req.query);
    const bks = BookStore.filter(info => info.author === req.query.author);

    res.send(bks);
});
app.get ("/book/:id", (req,res)=>{ // :id use params
    console.log(typeof req.params.id)
    const id = parseInt(req.params.id);
    // const bk = BookStore.find(info => info.id == id)
    res.send(BookStore[id]);
});

// Add data
app.post ("/book", (req,res)=>{ //new data sent in body 
    BookStore.push(req.body); // req.body have data  
    res.send("New Data Added!");
});

// patch : small changes
app.patch("/book",(req,res)=>{
    const bk = BookStore.find(info => info.id == req.body.id);

    if(req.body.name)
    bk.name = req.body.name;

    if(req.body.author)
    bk.author = req.body.author;

    res.send("patched complete!");
});

// put : all changes
app.put("/book", (req,res)=>{
    const bk = BookStore.find(info => info.id == req.body.id);
    bk.name = req.body.name;
    bk.author = req.body.author;
    res.send("put complete!");
})

app.delete("/book/:id", (req,res)=>{ //:id delete that , string formate!
    const id = parseInt(req.params.id);
    const index = BookStore.findIndex(info => info.id === id);

    BookStore.splice(index,1); // that index element deleted !
    res.send("Suss delted.");
})
// port
app.listen(400, ()=>{
    console.log("Port : 400");
})
