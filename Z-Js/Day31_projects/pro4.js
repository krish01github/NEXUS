const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const incoming = document.getElementById('income');
    const income = parseInt(incoming.value);
    let tax = 0;
    if(income>1600000){
        tax = (income*20)/100;
    }
    else if(income>1200000){
        tax = (income*18)/100;
    }

    document.getElementById('ans').textContent = `TAX AMOUNT : $ ${tax}`;
})