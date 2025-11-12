let time = document.getElementById('res');

setInterval(()=>{

// current date in milisec
const curr = Date.now();
// olampic start date
const oly = new Date(2028,6,14).getTime();

let t = oly-curr;
const day = Math.floor((t)/(1000*60*60*24));
t %= 1000*60*60*24;

const hour = Math.floor((t)/(1000*60*60));
t %= 1000*60*60;

const min = Math.floor(t/(1000*60));
t %= 1000*60;

const sec = Math.floor(t/(1000));

    time.textContent = `Day : ${day} Hour : ${hour} Min : ${min} sec : ${sec}`;
},1000)


