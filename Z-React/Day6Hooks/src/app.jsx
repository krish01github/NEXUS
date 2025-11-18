import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import ColorFull from  "./components/ColorFull";

function Main(){

    const [count , setcount] = useState(0);
    return (
        <>
            <div style={{backgroundColor:"white", borderRadius:"12px",textAlign:"center",color:"black"}}>
                <h1>Counter is : {count}</h1>
                <button onClick={()=>{setcount(count+1)}} style={{color:"black"}}>Inc</button>
                <button onClick={()=>{setcount(count-1)}} style={{color:"black"}}>Dec</button>
            </div>

            <ColorFull name={"hi"}/> {/* Function call ? will this get executed ? yes!! */}
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main/>)