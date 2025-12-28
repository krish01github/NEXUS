const express = require("express");
const app = express();
app.use(express.json());
// DB : USER&ADMIN  : visible 
const foodMenu = [
  { id: 1,  food: "Chowmein",        cat: "veg",     price: 80 },
  { id: 2,  food: "Veg Momo",        cat: "veg",     price: 50 },
  { id: 3,  food: "Veg Fried Rice",  cat: "veg",     price: 120 },
  { id: 4,  food: "Chicken Tikka",   cat: "non-veg", price: 180 },
  { id: 5,  food: "Paneer Tikka",    cat: "veg",     price: 160 },
  { id: 6,  food: "Chicken Biryani", cat: "non-veg", price: 220 },
  { id: 7,  food: "Veg Biryani",     cat: "veg",     price: 180 },
  { id: 8,  food: "Egg Roll",        cat: "non-veg", price: 70 },
  { id: 9,  food: "Paneer Roll",     cat: "veg",     price: 90 },
  { id: 10, food: "Chicken Roll",    cat: "non-veg", price: 110 },
  { id: 11, food: "Masala Dosa",     cat: "veg",     price: 100 },
  { id: 12, food: "Idli Sambhar",    cat: "veg",     price: 60 },
  { id: 13, food: "Butter Chicken",  cat: "non-veg", price: 250 },
  { id: 14, food: "Dal Makhani",     cat: "veg",     price: 140 },
  { id: 15, food: "Chicken Noodles", cat: "non-veg", price: 150 },
  { id: 16, food: "Veg Noodles",     cat: "veg",     price: 130 },
  { id: 17, food: "Fish Fry",        cat: "non-veg", price: 200 },
  { id: 18, food: "Aloo Paratha",    cat: "veg",     price: 70 },
  { id: 19, food: "Chicken Soup",    cat: "non-veg", price: 120 },
  { id: 20, food: "Veg Manchurian",  cat: "veg",     price: 140 },
];

// USER : Cart 
const AddToCart = [];

// STATUS CODE !! Admin_User.txt

// CRUD :
app.get("/food", (req,res)=>{
    res.status(200).send(foodMenu); // status code.
})

// ALL Admin auth can be done in middleware.
//********** app.use("/admin", (req,res,next)=>{}) -> Authentication!
app.post("/admin", (req,res)=>{
    // Check if req Really is admin !?
    // authentication ADMIN : Code
    const token = "abcd";
    const access = token === "abcd";
    if(access){
        foodMenu.push(req.body);
        res.send("Added new data");
    }
    else{
        res.send("No data");
    }
})
app.delete("/admin/:id", (req,res)=>{
    // Check if req Really is admin !?
    // authentication ADMIN : Code
    const token = "abcd";
    const access = token === "abcd";
    if(access){
        const id = parseInt(req.params.id);

        const index = foodMenu.findIndex(item => item.id === id);
        if(index==-1){
            res.send("No Data");
        }
        else{
            foodMenu.splice(index,1);
            res.send("del new data");
        }
    }
    else{
        res.status(403).send("No Permission");
    }
})
app.patch("/admin", (req,res)=>{
    // Check if req Really is admin !?
    // authentication ADMIN : Code
    const token = "abcd";
    const access = token === "abcd";
    if(access){
       const id = parseInt(req.body.id);
       // copy by ref cause its object 
       const foods = foodMenu.find(info => item.id === id);
       if(foods){
        if(req.body.food){
            foods.food = req.body.food;
        }
        if(req.body.cat){
            foods.cat = req.body.cat;
        }
        if(req.body.price){
            foods.price = req.body.price;
        }
       }
       res.send("DONE !");
    }
    else{
        res.status(403).send("No Access");
    }
})
// try-catch
app.get("/dummy", (req,res)=>{
    try{
        JSON.parse("{}");// valid
        // JSON.parse("HII");// Not valid
        res.send("Hello Coder.");
        // throw new "";
    }
    catch(err){
        res.send("Error Occured");
    }
    
})


app.listen(800, ()=>{
    console.log("Port 800 Listening ...");
})