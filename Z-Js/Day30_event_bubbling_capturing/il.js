// method 1
function handleClick(){
    const ele = document.getElementById("heading");
    ele.textContent = "Hello Krish!"
}
// method 2
const h22 = document.getElementById("sec");
h22.onclick = function handle(){
    h22.textContent = "Good moring";
}
// method 3
const ht = document.getElementById("th");
ht.addEventListener('mouseover',()=>{
    ht.textContent="lorem fdiu efiuuei";
})
ht.addEventListener('mouseover',()=>{
    ht.style.backgroundColor = "pink";
})