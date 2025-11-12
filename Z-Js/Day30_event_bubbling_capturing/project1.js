const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    // read the data then output of that operation
    const a = document.getElementById('first');
    const b = document.getElementById('second');
    const a1 = Number(a.value);
    const b1 = Number(b.value);
    const c = a1+b1;
    const s = document.getElementById('res');
    s.textContent = 'Result : ' + c;
})