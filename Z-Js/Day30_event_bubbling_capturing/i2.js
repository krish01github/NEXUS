const parent = document.getElementById("pare");
// for(let child of parent.children){
//     const a = child;
//     child.addEventListener('click',()=>{
//         child.textContent = "I am clicked";
//     })
// }

// better approach using event object.
function hanle(e){
    e.target.textContent = "I am chicked";
    parent.removeEventListener('click',hanle);
}
parent.addEventListener('click',hanle);




