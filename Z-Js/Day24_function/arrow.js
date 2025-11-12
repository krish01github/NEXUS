const fun = (...num)=>{
    console.log("HELO");
    console.log(num);
    return -1;
}
fun(1,23,4);

// if onnly u want to return value !
// const j = (num1,num2)=> {return num1+num2;} instead.
const j = (num1,num2)=> num1+num2;

const gret = ()=> {//normal
    let user = {
        name:"riht",
        age:20
    }
    return user
}
console.log(gret());
const gret1 = ()=> {// direct return object
    return {
        name:"riht",
        age:20
    }
}
console.log(gret1());
const gret2 = ()=> ({ // it is treating {} as function part and not objects
        name:"riht",
        age:20
    })
console.log(gret2());