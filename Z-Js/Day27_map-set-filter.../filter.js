const arrayName = [90,2,1,4,54,664,32];
let s  = arrayName.filter((number)=>number>25);// if true then added to s array
console.log(s,"\n----------------------------------");

function compare(num){
    if(num>25)
    return true;
    return false;
}// arrayName = [,,,,,, fil:[function]]
arrayName.fil = function(){
    const ans = [];
    for (const num of this) {
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}
console.log(arrayName);
console.log(arrayName["fil"]());
console.log(arrayName["fil"]);
console.log(arrayName.fil());

