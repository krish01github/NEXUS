function createBank() {
    let bal = 200; // private can't be accessed outside the function create Bank
    const user = { 
        dep: function (amt) {
            if (typeof amt === "number" && amt >= 0)
                bal += amt;
            return bal;
        },
        wit: function (amt) {
            if (typeof amt === "number" && amt >= 0)
                bal -= amt;
            return bal;
        }
    }
    return user;
}
let ob = createBank();
console.log(ob.dep(200));
console.log(ob.dep(900));