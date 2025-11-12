"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vertexai = require("firebase/vertexai");
// 1. Partial<>
const ob1 = {
    name: "krish",
    bal: 950
};
// 2. Required<>
const ob2 = {
    name: "ji",
    age: 90,
    bal: 456
};
ob2.age = ob2.age + 2; // update allowed
console.log(ob2.age);
// 3. Readonly<>
const obj3 = {
    name: "biet",
    age: 34,
    bal: 233
};
// obj3.age = obj3.age + 2;// update not allowed
console.log(obj3.age);
// Array of object :-
const arr = [{ name: "birh", age: 20 }, { name: "kaand" }];
const ae = [{ name: "oie", age: 234 }, { name: "pow" }];
// Function in TS :- Best hover over fucntion it will tell its type 
function greeet(a) {
    console.log(a);
    return a + 1;
}
let i = greeet(34);
function meet(s) {
    console.log(s);
    return "hello";
}
meet("hi");
let io = meet(90);
// Arrow fucntion in TS:-
const why = (ap, pa) => ap + pa;
console.log(why(23, 34));
// CallBack Function :-
function ll(order, CallBack) {
    const amt = order + 10;
    CallBack(amt);
}
ll(10, (amt) => {
    console.log("done " + amt);
});
