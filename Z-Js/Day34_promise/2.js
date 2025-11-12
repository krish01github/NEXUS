const p1 = fetch('https://api.github.com/users');
console.log(p1); // pending 
p1.then(returnValue=>returnValue.json()) // in byte formate
.then(Value=>{
    const hi = document.getElementById('hi');

    for(let i=0;i<Value.length;i++){
        const image = document.createElement('img');
        image.src = Value[i].avatar_url;
        image.style.height = '40px';
        image.style.width = '40px';

        hi.append(image);
    }
}) // actual information, object formate!!
.catch(error=>{
    const hi = document.getElementById('hi');

    const p = document.createElement('p');
    p.textContent =error.message; // failed to fetch!
    hi.append(p);
})
