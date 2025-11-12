const prom = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello");
    },3000)
})

// console.log(prom); gives pending 
// Normal method !
// prom.then((res)=>{
//     console.log(res);
// })

// asyn + awiat
async function name1(){
    const data = await prom; // await works as .then()
    console.log(data);
    const data1 = await prom; // same 
    console.log(data1);
}
name1();