// zomato 

function placeorder(callback) {
    console.log("Payment is in progress..");//1

    setTimeout(()=>{
        console.log("Payment doonee");//2
        callback();
    },3000)
}

function prepar(callback){
    console.log("Your food is in progress..");//3

    setTimeout(()=>{
        console.log("Your order will be delivered!");//4
        callback();
    },3000)
}

function deliver(){
    console.log("order colleced!");//5

    setTimeout(()=>{
        console.log("Doorstep!");//6
    })
}
// Callback HELL
placeorder(()=>{  // A new function that, when called, will call prepar()
    prepar(()=>{ 
        deliver();
    });// can pass multiple argument
});
// placeorder(prepar); // The actual function reference prepar

// const a = ()=>{
//              prepar(()=>{
//                  deliver();        
//              });
//           }
// placeorder(a);

// prepar(); is wrong cause js won't stop/wait so this will get executed before stTimeout() of placeorder()

