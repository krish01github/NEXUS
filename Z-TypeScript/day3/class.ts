import auth = require("firebase/auth");

// Class
class Bank{
    // Attributes : here are complusry to be initialize
    name:string;
    age:number;
    acc:number;
    constructor(name:string,age:number,acc:number){
        this.name = name;
        this.age = age;
        this.acc = acc;
    }
    greet():void{
        console.log(`hello ${this.name}`);
    }
}
const ob1 = new Bank("dijd", 90, 233); // without new its treated as normal function
console.log(ob1);
ob1.greet();

// extends  
interface human {
    name:string,
    age:number
}
interface teacher extends human{
    sal:number,
    id:string
}
const i:teacher = { // Teacher have property of human also
    name : "rohit",
    age:34,
    sal:6789,
    id:"jxie"
}

// super 

class human1 {
    qname:string;
    qage:number;

    constructor(qname:string, qage:number){
        this.qname = qname;
        this.qage = qage;
    }
}
class teacher1 extends human1{
    sal:number;
    id:string;

    constructor(sal:number, id:string , qname:string , qage:number){
        // super 
        super(qname,qage);
        this.sal = sal;
        this.id = id;
    }
}
const t1 = new  teacher1(233,"hdhd","sjisj",902);

// Generic 
function zalue<T>(a:T):T{ // a: (number|string|number[])
    // error : .toString()..
    return a;
}
console.log(zalue(23));// optional : console.log(zalue<number>(23));
console.log(zalue("hxu"));
console.log(zalue([1,2,3,3]));
//  Generic Arrow
const jdid = <T>(a:T):T=>{
    return a;
}  
