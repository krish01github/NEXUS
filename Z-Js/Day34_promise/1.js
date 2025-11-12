console.log("Hello");

const p1 = fetch('https://api.github.com/users');
console.log(p1); // pending 
p1.then(returnValue=>returnValue.json()) // in byte formate
.then(Value=>console.log(Value)); // actual information, object formate!!

console.log("Bye");