const obj = fetch('https://api.weatherapi.com/v1/current.json?key=0bef1045da94499d9e9143432252710&q=London&aqi=yes') // return object
setTimeout(()=>{
    console.log(obj); // this will return object 
},2000)
