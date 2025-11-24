let b = 20;

function greet(){
    let a = 10;

    function meet(){
        console.log(a);
    }
    return meet;
}
const num = greet();
console.log(num);
num(); // 10 ? how : closer
// console.log(a); // error: out of scope!