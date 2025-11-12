const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello i take 3 sec to run");
    },3000)
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("2nd i don't take time cause i take same time as p1");
    },3000)
})
async function name1(){
    try
    {
        const data = await p1; //  3sec
        console.log(data);
        const data1 = await p2; // no time it runs cause it also takes same time to resolve as p1 !
        console.log(data1);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("end");
    }

}
name1();
