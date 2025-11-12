const f = document.querySelector('form');

f.addEventListener('submit',(e)=>{
    e.preventDefault();// it won't get auto refresh
    const b =document.getElementById('boy');
    const g = document.getElementById('girl');
    let boy = b.value.length;
    let girl = g.value.length;
    let ans = boy+girl;
    ans += 7*(22/7);
    ans %= 101;
    document.getElementById('ans').textContent = `RESULT : ${ans} %`;
})