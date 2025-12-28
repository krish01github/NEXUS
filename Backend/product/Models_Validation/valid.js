const validator = require('validator'); // For validation lib

function Validation(data){
    const mandatory = ["firstName","age","email","password"];
    // .every() checks condition for all , if 1 fail returns false!
    const isAllowed = mandatory.every( k=> Object.keys(data).includes(k));

    if(!isAllowed)
        throw new Error("Field Missing!");

    if(!validator.isEmail(data.email))// Check is email is correct or not 
        throw new Error("Invalid Email ID !");

    if(!validator.isStrongPassword(data.password))//min 8char      
        throw new Error("Weak Password !");        

    if(!(data.firstName.length >= 3 && data.firstName.length<=20))
        throw new Error("3 to 20 char !");                    


}
module.exports = Validation;