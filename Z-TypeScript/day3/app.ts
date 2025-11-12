import vertexai = require("firebase/vertexai");

interface cus {
    name:string,
    age:number,
    bal:number
}

// 1. Partial<>
const ob1: Partial<cus>={ // ALL property are optional
    name:"krish",
    bal:950 
}

// 2. Required<>
const ob2: Required<cus>={
    name:"ji",
    age:90,
    bal:456
}
ob2.age = ob2.age + 2;// update allowed
console.log(ob2.age); 

// 3. Readonly<>
const obj3:Readonly<cus> = {
    name:"biet",
    age:34,
    bal:233
}
// obj3.age = obj3.age + 2;// update not allowed
console.log(obj3.age); 

// Array of object :-
const arr:{name:string,age?:number}[] = [{name:"birh",age:20},{name:"kaand"}];

interface peo {
    name:string,
    age?:number
}
const ae:peo[] = [{name:"oie",age:234},{name:"pow"}];

// Function in TS :- Best hover over fucntion it will tell its type 
function greeet(a:number):number{ // argument & return datatype !
    console.log(a);
    return a+1;
}
let i:number = greeet(34);
function meet(s:(string|number)):(string|number){
    console.log(s);
    return "hello";
}
meet("hi");
let io:(number|string) = meet(90);

// Arrow fucntion in TS:-
const why = (ap:number,pa:number):number=> ap+pa;
console.log(why(23,34));

// Alice for function - just declare the datatype of argument & return of function 
type chill = (am:number)=>void;

// CallBack Function :-
function ll(order: number, CallBack: (amt: number) => void): void { // callback:chill
    const amt = order + 10;
    CallBack(amt);
}
ll(10, (amt:number):void => {
    console.log("done " + amt);
});



