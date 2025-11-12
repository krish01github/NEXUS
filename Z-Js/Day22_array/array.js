// Arrray :
let a = [20,34,56,77];
console.log(a);
console.log(a.length);

// array is mutable
console.log(typeof a);
a.push("hello");
console.log(a);
console.log(typeof a[4]);
a.push(true);
console.log(a);
a.pop();
console.log(a);
a.unshift(false);// not adviced. Time Complexity
console.log(a);
// many properties...

