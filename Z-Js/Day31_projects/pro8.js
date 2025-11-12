const body = document.querySelector('body');

body.addEventListener('click',(e)=>{
    let x = e.clientX;
    let y = e.clientY;
    const newCreate = document.createElement('div');
    newCreate.classList.add('circle');
    newCreate.textContent = 'hi';

    const color = ['red', 'green', 'pink'];
    newCreate.style.backgroundColor = color[Math.floor(Math.random()*3)];

    newCreate.style.top = `${y-25}px`;
    newCreate.style.left = `${x-25}px`;

    body.append(newCreate);

    setTimeout(()=>{
        newCreate.remove();
    },4000);
})