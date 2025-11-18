import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function ColorFull(props){

    const [color , setColor] = useState('black');
    console.log("render.." + props.name);
    
    useEffect(()=>{
        console.log("use Effect");
        document.body.style.backgroundColor = `${color}`;
    }, [color]);

    return (
        <>
            <div className="but">
                <h1>Background Color : </h1>
                <button style={{backgroundColor:"red"}} onClick={()=>{setColor('red')}}>Red</button>
                <button style={{backgroundColor:"green"}} onClick={()=>{setColor('green')}}>Green</button>
                <button style={{backgroundColor:"black"}} onClick={()=>{setColor('black')}}>black</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>{setColor('pink')}}>pink</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>{setColor('orange')}}>orange</button>
            </div>
        </>
    )
}

export default React.memo(ColorFull);