import { useState } from "react";


export default function Add({value}){
    const [count, setcount] = useState(0);

    return(
        <>
            <h1>{value} is {count}</h1>
            <div style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
                <button onClick={()=>setcount(count+1)}>Increment</button>
            </div>
        </>
    )
}