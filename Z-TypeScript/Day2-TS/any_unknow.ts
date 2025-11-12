console.log("Hello coder Army !");

let num:number = 20;
// num = "I won't work , Will through Error!";


let s = "string"; // It will assume it's datatype based on the initialization 
// s =20; // error 

let v:any; // datatype -> any , you can put any datatype ! behave just like Js variable!
v = 20;
v = "fuckAhhh";
console.log(v.toUpperCase());

let w:unknown;// same as any 
w = 90;
w = "hello";
// console.log(w.toUpperCase());// error ! for unknown
if(typeof(w)=='string')
    console.log(w.toUpperCase());// no error now 

