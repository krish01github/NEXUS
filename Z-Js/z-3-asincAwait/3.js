function test1(){
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello i take 3 sec to run");
        },3000)
    })
    return p1;
}
function test2(){
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("bye i also take 3 sec indivisually");
        },3000)
    })
    return p2;
}

async function test(){ 

    console.log("1line");

    // micro queue! cause js don't wait !
    const prom1 = await test1(); // take separate 3 sec
    console.log(prom1);
    const prom2 = await test2(); // take separate 3 sec
    console.log(prom2);
}
test();
console.log("2line")
console.log("3line")
// for (let i=0;i<100;i++) {
//     console.log(i);
// }

