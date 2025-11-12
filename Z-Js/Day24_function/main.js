// function declarion + body
function greet(num1,num2,num3=0){ // default value
    console.log("Hi");
    return num1+num2;
}

console.log(greet());// function call NaN
console.log(greet(1));// function call NaN cause num2 undefined.
console.log(greet(4,4));// function call

// better approach so u no need keep track of parameters : rest operator 
function add(...num){
    console.log(num);
    let sum = 0;
    for(let n of num)
    {
        sum += n;
    }
    return sum;
}
console.log(add(1,2,3,4))
console.log(add(1,4))

// method 2 : store function in variable
const add1  =  function(...num){
    let sum = 0;
    for(let n of num)
    {
        sum += n;
    }
    return sum;
}
console.log(add1);//[Function: add1]
console.dir(add1);// in object form
console.log(add1());//0
console.log(add1(2,3));//5 

