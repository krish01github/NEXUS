const Promises = fetch('https://api.weatherapi.com/v1/current.json?key=0bef1045da94499d9e9143432252710&q=London&aqi=yes'); // return object

Promises.then((response)=>{
    const v = response.json();
    v.then((argu)=>{
        console.log(argu);// entier body part !
        console.log(argu.current.temp_c); // gives temperature only 
    })
}).catch((error)=>{
    console.log(error);
})

fetch('https://api.weatherapi.com/v1/current.json?key=0bef1045da94499d9e9143432252710&q=London&aqi=yes')
.then(respose=>respose.json())
.then(argu=>console.log(argu.current.temp_c));