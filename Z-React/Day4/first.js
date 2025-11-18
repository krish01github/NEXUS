// Import React & ReactDOM 
import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello krish</h1>;

function Greet(name,age){
    return <h2>Hello ji {name} {age}</h2>
}
function Greet1(arg){// arg is object 
    return <h2>Hello ji {arg.name} {arg.age}</h2>
}

const ji = <Greet1 name="je" age="90"/>;

const a = {
    name:"krish",
    age:23
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<> {element1} {Greet("Krish")} {a.age} {ji} </>);

