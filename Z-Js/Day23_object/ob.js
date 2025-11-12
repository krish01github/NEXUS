const user = {
    name:"rohit",
    age: 20,
    surname: "negi",
    greeting: function(){
        console.log(`Hello! ${user.name}`);
        return 20;
    }
}
console.log(user);
let va = user.greeting();

const temp = Object.entries(user);
for (const iterator of temp) {
    console.log(iterator);
}