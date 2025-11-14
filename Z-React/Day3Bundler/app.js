// Import React & ReactDOM from node_module
import React  from "react"; // import 
import ReactDOM from "react-dom/client";

const ele = React.createElement('h1',{id:"first", className:"rahul", style:{backgroundColor:"blue", fontSize:"30px"}},"Hello Coder Army");
const ele2 = React.createElement('h2',{id:"sdf", className:"rahul", style:{backgroundColor:"pink", fontSize:"30px"}},"Abel is a bitch");
const div1 = React.createElement('div',{},[ele,ele2]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div1); // now  all mention in div1[] will be displayed 


