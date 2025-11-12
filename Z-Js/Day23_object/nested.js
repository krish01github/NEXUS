const user = {
    name:"rohit",
    0: 20, // to access this use user[0] or user["0"]
    surname: "negi",
    greeting: function(){
        console.log(`Hello! ${user.name}`);
        return 20;
    },
    address: {
        city:`ruis`,
        state:  `ello`
    }
}
console.log(user);