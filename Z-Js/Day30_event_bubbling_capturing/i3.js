const gp = document.getElementById("grabdfather");
const p = document.getElementById("parent");
const c = document.getElementById("child");

gp.addEventListener('click', ()=>{ // only gp
    console.log("GP is clicked");
})

p.addEventListener('click', ()=>{ // gp & p 
    console.log("P is clicked");
})

c.addEventListener('click', ()=>{ // all 3 will be 
    console.log("c is clicked");
},true)
