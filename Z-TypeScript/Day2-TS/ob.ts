// object 
let o:{name:string,age:number} = {
    name:"krisj",
    age:34
}
let person:{name1:string,age:number,bal:number}
//  All should be filled else shows error!
person = {
    name1:"stip",
    age:23,
    bal:235
}
// let n = person.ag; shows error cause in object person there is no key ag

// ALises
type variable_name = {
    name:string,
    age:number,
    id:string
}
let c1:variable_name = {
    name:"sd",
    age:2,
    id:"3df"
}
console.log(c1);

//inteface
interface variablename{
    name:string,
    age:number,
    pos:string
};
interface variablename{
    ip?:string
};// allwoed but even this key should be written when using creating&using object 
// all key should be there or else error
let ner: variablename = {
    name:"ji",
    age:6,
    pos:"jis"// ip is optional , thus no error !!!s
};