const now = new Date();
console.log(now); // UTC time
console.log(now.toISOString()); // UTC time
console.log(now.toLocaleString()); // India/loaction time
console.log("OUR TIME : " + now.toString()); //indian standard time current time!
console.log(now.getDate());
console.log(now.getDay()); // 1 to 7
console.log(now.getFullYear());
console.log(now.getMonth());// 0 to 11
console.log("--------------------------");

// month - 0 to 11, days - 1 to 7, 
// year,month, date, hour, min, sec, millisec
const newnow = new Date(2025,8,20,8,23,12,234);
console.log(newnow); // 2025-09-20T02:53:12.234Z // time has gone back! according to current month(0index)-hr&min(utc time)

console.log("--------------------------");
// gives utc time ! brower auto convert to local date to user
const hi = Date.now();
const hello  = new Date(hi);
console.log(hi);
console.log(hello); 
