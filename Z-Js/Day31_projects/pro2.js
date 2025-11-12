const parent = document.getElementById('parent');

parent.addEventListener('click',(e)=>{
    const trigger = e.target;
    if(trigger.tagName === 'BUTTON'){
        document.body.style.backgroundColor = trigger.id;
        document.getElementById('stupid').textContent = 'I am color';
    }
    else{
        document.getElementById('stupid').textContent = 'I am not color';
    }
})