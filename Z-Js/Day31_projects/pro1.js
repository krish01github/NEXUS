const quote = [
   "Hello Good Moring",
   "If heaven doesn't exist i will create one",
   "Everthing will eventually die",
   "Find a way or create one",
   "xyz",
   "abc",
   "I seeeee youu!"
];

const button = document.querySelector('button');
const qu = document.querySelector('h1');
button.addEventListener('click',()=>{
    const index = Math.floor(Math.random()*7);
    qu.textContent = quote[index];
})