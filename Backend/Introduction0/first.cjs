const res =  require("./second.cjs"); //
// without module.exports :  sum(10,10);//sum is not defined.By default private!
res.sum(3,4);
res.sub(8,4);


console.log("Hello I'am 1");