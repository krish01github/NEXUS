// asyncronus task
const obj = fetch('https://api.weatherapi.com/v1/current.json?key=0bef1045da94499d9e9143432252710&q=London&aqi=yes') // return object
console.log(obj); // Promise { <pending> }? cause fetch is asynchornus thus you didn't give time to execute that directlty printed.
