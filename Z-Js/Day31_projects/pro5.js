const div = document.querySelector('div');


// div.textContent = time.toLocaleTimeString();
function update(){
    let time = new Date();
    div.textContent = time.toLocaleTimeString();
}

// update every second
setInterval(update, 1000);
// show immediately on load
updateClock();
