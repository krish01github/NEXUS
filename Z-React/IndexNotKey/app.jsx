import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Add from "./add";

function App(){
    const [language, setLanguage] = useState(["TS","JS","Java"]);

    function handleClick(){
        setLanguage(["C++",...language]); //new array
    }
    return(
        <>
            <div style={{display:"flex", justifyContent:"center", gap:"20px", backgroundColor:"pink"}}>
                {
                    language.map((value, index)=><Add key={value} value={value}/>)
                }
            </div>
            <button onClick={handleClick}>Add Language</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);