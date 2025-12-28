const bcrypt = require('bcrypt');

const password = "krish567";

async function Hashing(){

    const salt = await bcrypt.genSalt(10);
    console.log(salt); // store salt 
    const hashpass = await bcrypt.hash(password,salt);
    // bcryptVersion + round + 22 char salt + 31 char hash password
    // const hashpass = await bcrypt.hash(password,10);// slow process sso needs time + auto added 10->salt
    console.log(hashpass);

    // If we are allowed or not check :-
    // 1. remove salt part from hashpass then checks the password hash with remaining hashpass.
    const ans = await bcrypt.compare(password, hashpass); // originalPassword, hashedPassword
    console.log(ans);// true / false!
}

Hashing();