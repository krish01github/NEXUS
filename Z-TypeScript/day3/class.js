"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Class
class Bank {
    // Attributes : here are complusry to be initialize
    name;
    age;
    acc;
    constructor(name, age, acc) {
        this.name = name;
        this.age = age;
        this.acc = acc;
    }
    greet() {
        console.log(`hello ${this.name}`);
    }
}
const ob1 = new Bank("dijd", 90, 233); // without new its treated as normal function
console.log(ob1);
ob1.greet();
const i = {
    name: "rohit",
    age: 34,
    sal: 6789,
    id: "jxie"
};
// super 
class human1 {
    qname;
    qage;
    constructor(qname, qage) {
        this.qname = qname;
        this.qage = qage;
    }
}
class teacher1 extends human1 {
    sal;
    id;
    constructor(sal, id, qname, qage) {
        // super 
        super(qname, qage);
        this.sal = sal;
        this.id = id;
    }
}
const t1 = new teacher1(233, "hdhd", "sjisj", 902);
