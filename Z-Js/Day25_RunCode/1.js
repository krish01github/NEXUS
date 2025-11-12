console.log(a);
var a = 10;
var b = 20;

console.log(c);
var c = fun(a,b);
console.log(c);

function fun(num1,num2)
{
    return num1+num2;
}

// console.log run during exeution!

// memory allocation
// a = undefined
// b = undefined
// c = undefined
// fun = fun code

// execution phase
// a=10
// b=20
// c=30
// fun=fun code