const product = [
    {id: 1, name: "Laptop", cat: "Electronics", price: 1200},
    {id: 2, name: "monti", cat: "Electronics", price: 388},
    {id: 3, name: "sleter", cat: "Electronics", price: 1300},
    {id: 4, name: "keyboard", cat: "Electronics", price: 5200},
    {id: 5, name: "Headphone", cat: "Electronics", price: 6200},

    {id: 6, name: "Laptop", cat: "whu", price: 1200},
    {id: 7, name: "monti", cat: "whu", price: 388},
    {id: 8, name: "sleter", cat: "whu", price: 1300},
    {id: 9, name: "keyboard", cat: "whu", price: 5200},
    {id: 10, name: "Headphone", cat: "whu", price: 6200},

    {id: 11, name: "Laptop", cat: "iot", price: 1200},
    {id: 12, name: "monti", cat: "iot", price: 388},
    {id: 13, name: "sleter", cat: "iot", price: 1300},
    {id: 14, name: "keyboard", cat: "iot", price: 5200},
    {id: 15, name: "Headphone", cat: "iot", price: 6200},

    {id: 16, name: "Laptop", cat: "uwuw", price: 1200},
    {id: 17, name: "monti", cat: "uwuw", price: 388},
    {id: 18, name: "sleter", cat: "uwuw", price: 1300},
    {id: 19, name: "keyboard", cat: "uwuw", price: 5200},
    {id: 20, name: "Headphone", cat: "uwuw", price: 6200}
]

let x = product.reduce((accumulater,currentPrice,index,arr)=>{
    return accumulater+currentPrice.price;
},0)
console.log(x);