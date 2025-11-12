let x = product.reduce((accumulater,currentPrice,index,arr)=>{
    return accumulater+currentPrice.price;
},0)