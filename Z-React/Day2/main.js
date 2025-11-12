//  React & react DOM :: first tag name , second style , textcontent 
const ele = React.createElement('h1',{id:"first", className:"rahul", style:{backgroundColor:"blue", fontSize:"30px"}},"Hello Coder Army");
const ele2 = React.createElement('h2',{id:"sdf", className:"rahul", style:{backgroundColor:"pink", fontSize:"30px"}},"Abel is a bitch");
const div1 = React.createElement('div',{},[ele,ele2]);

// Warning : ReactDOM 
// ReactDOM.render(ele,document.getElementById('root')); 

// model no warning
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(ele);
// root.render( ele2);// only ele2 will be displayed cause static + ele removed/overWritten in root?
root.render(div1); // now  all mention in div1[] will be displayed 

// Jsx : if u wanna create div>div>h1>p></p</h1</div</div very complicated using normal react



