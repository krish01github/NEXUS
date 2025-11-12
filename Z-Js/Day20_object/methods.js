//1 .toFixed()
let a = 10;
let b = 234.4332;
let c = b.toFixed(2);
console.log(c);
console.log(typeof c);
console.log("-------------------------");

//2 .toPrecision()
console.log(b.toPrecision(5));
console.log(typeof b.toPrecision(5));
console.log("-------------------------");

//3 .toString()
console.log(a , typeof a);
console.log(a , typeof a.toString());
console.log(a , typeof a);
console.log("-------------------------");

//4 create number : other method.
let z = new Number(90);
let z1 = z;
let x = new Number(90);
console.log(z);// [Number: 90]
console.log(typeof z);//object !
console.log(z==x); // false, cause object are same when they point same memory location.
console.log(z==z1); // true, cause point same memory location! reference.
console.log(Boolean(new Number(0)));// true for 0?? cause empty object is true always!
console.log("-------------------------");


