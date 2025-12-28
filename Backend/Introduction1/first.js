const index = require("./current") 
// Without /index it works? Cause in a floder index file is consider main file.

index.sm(2,3)
index.sb(3,2)
index.ml(2,8)

console.log("Hello Ji");
if (typeof window !== "undefined") {
    console.log("Running in Browser");
  } else {
    console.log("Running in Node.js");
  }
  