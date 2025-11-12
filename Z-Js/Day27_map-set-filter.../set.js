const a = [12,12,13,24,23,12,13,45];

console.log(a);

const s = new Set(a);


s.add(20);
let x = s.size;
console.log(x, s);

const nearray = [...s];
console.log(nearray);