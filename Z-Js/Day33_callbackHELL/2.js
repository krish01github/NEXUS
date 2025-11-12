const order = {
    orderId : 123123,
    food : ["Pizza","biryani","coke"],
    cost : 620,
    customerName : "Krish",
    customerLocation : "BAnglore"
};

// order1 is same as order
function placeorder(order1,callback) {
    console.log(`${order1.cost} Payment is in progress..`);//1

    setTimeout(()=>{
        console.log("Payment doonee");//2
        callback(order1);
    },3000)
}

function prepar(order1, callback){// order1 argument from previous call
    console.log(`${order1.food[0]} ${order1.food[1]} ${order1.food[2]} Your food is in progress..`);//3

    setTimeout(()=>{
        console.log("Your order will be delivered!");//4
        callback(order1);
    },3000)
}

function deliver(order1){// order1 argument from previous call
    console.log(`${order1.orderId} order colleced!`);//5

    setTimeout(()=>{
        console.log("Doorstep!");//6
    })
}

// Callback HELL
placeorder(order, (order1)=>{  // A new function that, when called, will call prepar()
    prepar(order1, (order1)=>{
        deliver(order1);
    });// can pass multiple argument
});

