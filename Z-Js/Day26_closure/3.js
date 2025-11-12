function a(){
    let count = 0;
    function inc(){
        count++;
        return count;
    }
    return inc;
}
const c = a();
console.log(c());//1
console.log(c());//2
console.log(c());//3
// if return was inc()
// const c = a();// c don't store function but a const value which is returned by inc() during a().
//1 // console.log(c()) - error & console.log(c) - correct cause c isn't function
//1
//1


function b(){
    function hi(){
        console.log("Hello ");
    }
    return hi;// return reference
    // return hi();// return value if any by hi() else undefined.
}
const c1 = b();
console.log(c1);
c1();