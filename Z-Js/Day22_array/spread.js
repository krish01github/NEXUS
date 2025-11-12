const a = [1,2,3,4,5];
const b = [2,32,45,43];

// Wrong method
const c = a+b;
console.log(c);//concat but not array it is string!
console.log(typeof c);//string

// push
// a.push(b);
console.log(a); // pushed entier array as one part.

// concat
const h = a.concat(b);
console.log(h);// typeof object 
console.log(a);

// sprade
const f = [a,b];
const l = [...a,...b];// concate & 2D array returned
console.log(f,"\n",l);// concat & 1D array returned

//sort 
const y = a.sort();
a[1] = 9000;// changes in y also 
console.log(y);

//array to string :
let o = f.toString();
console.log(o);

