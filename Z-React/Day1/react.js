//  React & react DOM 
const ele = React.createElement('h1',{},"Hello Coder Army");

// Warning : ReactDOM 18 don't render use other react like 17 , 19 
// ReactDOM.render(ele,document.getElementById('root')); 

// corrected 18 model
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ele);
