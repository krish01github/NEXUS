console.log("Hello I'am 2");

function sum(a,b){ 
    console.log(a+b);
}

function sub(a,b){ 
    console.log(a-b);
}

console.log(module.exports);// Empty object
module.exports ={ sum,sub };