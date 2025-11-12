// Mannually 
const a1 = document.createElement('h1');
a1.textContent =  "Hello Coder ARmy";
a1.style.backgroundColor = 'black';
a1.style.fontSize = '30px';
a1.style.color = 'white';

const a2 = document.createElement('h2');
a2.textContent =  "Bye Coder ARmy";
a2.style.backgroundColor = 'black';
a2.style.fontSize = '30px';
a2.style.color = 'white';

const a3 = document.getElementById('root');
a3.append(a1);
a3.append(a2);

// Automate the process : Create
const react = { //object 
    createElement : function(tag,style,children){
        const ele = document.createElement(tag);

        if(typeof children == 'object'){
            for (let valu of children) {
                ele.append(valu);
            }
        }
        else
            ele.innerHTML = children;

        for (let [i, j] of Object.entries(style)) { // craetes 2 d array of key&val , i=key,j=val
            ele.style[i] = j;
        }
        
        // use for in loop only key recived but use forof with Object.entries(style)          
        return ele;
    }
}
// return that new element in h1&h2
const h1 = react.createElement('h1', {fontSize: "40px",backgroundColor: "pink",color: "white"}, "Hello coder army");
const h2 = react.createElement('h2', {fontSize: "40px",backgroundColor: "pink",color: "white"}, "Bye coder army");
    
// Rendering: DOM 
const reactDOM = {
    render : function(element,root){
        root.append(element);
    }
}
reactDOM.render(h1, document.getElementById('root'));
reactDOM.render(h2, document.getElementById('root'));
// a3.append(h1);
// a3.append(h2);

// Unorder List : *html, *css, *js 
const li1 = react.createElement('li', {fontSize: "30px",backgroundColor: "pink",color: "black"},"HTML");
const li2 = react.createElement('li', {fontSize: "30px",backgroundColor: "pink",color: "black"},"css");
const li3 = react.createElement('li',{fontSize: "30px",backgroundColor: "pink",color: "blue"},"js");
const ul = react.createElement('ul',{backgroundColor:"yellow"},[li1,li2,li3]); // children are in form of array 
reactDOM.render(ul, document.getElementById('root'));

