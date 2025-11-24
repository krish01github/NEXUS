import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator(){
    // changing variable 
    const [password , setPass ] = useState('');
    const [Lenth , setLen ] = useState(0);
    const [num, setnum] = useState(false);
    const [cha, setch] = useState(false);
    
    const genPass = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(num)
            str += "1234567890";
        if(cha)
            str += '@#_$%&*()^{}+=?/!><:;-~';

        let pass = "";
        for(let i=0;i<Lenth;i++){
            pass += str[Math.floor(Math.random()*str.length)];
        }
        setPass(pass);
    },[Lenth,cha,num]);
    // if u call the genPass() infinite loops ??
    // cause of setPass() which call the main funtion again & again.
    useEffect(()=>{ //runs at end , 1 time initialy ! calls when Lenth,cha,num changes.
        genPass();
    },[Lenth,cha,num]);// [genPass] cause both use same dependency

    return (
        <>
            <h1>{password}</h1>
            <div>
                <input type="range" min={6} max={60} value={Lenth} onChange={(e)=>setLen(e.target.value)}></input>
                <label>Lenth is : {Lenth}</label>
                <input type="checkbox" defaultChecked={num} onChange={(e)=>setnum(!num)}></input>
                <label>Number</label>
                <input type="checkbox" defaultChecked={cha} onChange={(e)=>setch(!cha)}></input>
                <label>Character</label>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);