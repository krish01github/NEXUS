// create a new element
const newEle = document.createElement("h2");
newEle.textContent = `Strike is coming`;
newEle.id = "second";

// display the newEle & where to display
const ele = document.getElementById("first");
ele.after(newEle);

// 
const e3 = document.createElement("h3");
e3.textContent =   `dewali`;
e3.id = "th";
e3.className = "third"; // why not just class cause class is reserved keyword.

newEle.after(e3);


// list, nls is child of ul
const list = document.createElement("li");
list.textContent="bye";
const list2 = document.createElement("li");
list2.textContent="breakfast";
const list3 = document.createElement("li");
list3.textContent="mid";

const ols = document.getElementById("listing");
ols.append(list);
ols.prepend(list2);
//  in mid 
// list2.after(list3);// or
ols.children[1].after(list3);

// real world eg : but for UI its bad? if directly append in for loop
const frag = document.createDocumentFragment();
const arr = ["apple","mango","domino"];
for (let food of arr) {
    const l = document.createElement("li");
    l.textContent = food;
    frag.append(l);
}
ols.append(frag);
// console.log(newEle);


const month = document.getElementById("year");
console.log(month.children);// 3child - normal : mordern way!
console.log(month.childNodes);// nextline,text is also calculated

// old method of adding, why innerHTML is dangerous.
const lister = document.createElement("li");
lister.innerHTML = "<h1>december<h1>";

month.insertAdjacentElement("afterbegin",lister);// old way
