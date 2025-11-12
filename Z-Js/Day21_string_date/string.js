//  method 1
const str1 = "Krish";
//  method 2
const str2 = 'Rohit negi';
//  method 3 : mordern mathod
let day = 90;
const str3 = `Strick sdiuchiu ch ucsdh c
 dhcudh d ${day}`;

console.log(str1,str2,str3);
console.log("--------------------------------------");

let str4 = `btech krish is btech STUDENt`;
console.log(str4.length);
console.log(str4.toUpperCase());
console.log(str4.toLowerCase());
console.log(str4.indexOf("btech"));
console.log(str4.lastIndexOf("btech"));
console.log(str4.indexOf("hueh"));
console.log(str4.lastIndexOf("hueh"));
console.log(str4.includes("is"));
console.log(str4.includes("ass"));
// sice
console.log(str4.slice(2,6));// from index : 2<=char<6
console.log(str4.substring(2,6));// from index : 2<=char<6
console.log("--------------------------------------");

let a = "hi i am krish krish what is your name?";
console.log(a.replace("krish","sonu"));
console.log(a.replaceAll("krish","sonu"));
console.log("--------------------------------------");

//  .trim()
let b = "krish,joi,koiss, iow";
let r = b.split(",");
console.log(r);
