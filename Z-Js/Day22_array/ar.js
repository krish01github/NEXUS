let a = [10,20,30,40,50,60];
let size = a.length;//6
for(let i=0;i<size;i++){
    console.log(a[i]);
}
console.log();
for(let num of a)
{
    console.log(num);
}
let b = a;// both point same array.
console.log(a,b);
b.push(5,0);
console.log(a);
console.log(b);

// const array : can't change entier array. BUT if address of array isn't changed so you can add/change value.
// Heap & stack logic

const arr = [10,20,30];
//arr = [20,30,40];// error : completely new array isn't possible cause new address will be created.
arr[1] = "hello";
arr.push(true);
console.log(arr);

// slice & splice.