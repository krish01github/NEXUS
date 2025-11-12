const arr = [10,203,4,56,"bdd",12.34];
let y = true;
arr.forEach((element,inx,a) => {
    if(y){
        console.log(a);
        y = false;
    }
    console.log(element," - ",inx);
});