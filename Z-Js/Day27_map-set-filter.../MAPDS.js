const mapname = new Map([
    ["ROhit",4], // first is key , second is value.
    [45,"hello"],
    [true,22],
    [[10,30,20], "Mohit"]
]);
mapname.set("hell","why"); // add new map element
mapname.set({name:"ewiix",age:20}, false);

console.log(mapname.get(45));

// mapname.delete(key)
console.log(mapname);

for (let [keys,value]  of mapname) {
    console.log(keys,"--",value);
}