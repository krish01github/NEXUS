let a = 10;
const b = 20;

console.log(a);// accessable; 
function greet(a){
    console.log(a);// accesable; in function
    let c = 40;
    console.log(c);// accesable; in function only!
}
greet(a);
if(true){
    console.log(a);// accessable; in block
    let d = 50;
    var d1 = 80;
}

console.log(d1);//Acess;
console.log(d);// can not Acess;
console.log(c);// can not Acess;