const fs = require("fs");// fs -> file system
fs.readFile("./data.json", "utf-8", (err,res)=>{ // We need in utf-8 formate or else binary
    console.log(res);
})
