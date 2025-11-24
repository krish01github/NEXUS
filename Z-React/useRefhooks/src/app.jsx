import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [count,setCount] = useState(0);
    const money = useRef(0); // create a object , key-current which holds the value.
    useEffect(()=>{console.log(money)},[]);

    return(
        <>
            <h1>Counter : {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>

            <h1>Money : {money.current}</h1>
            {/* money value increse but not on UI Cause no re-render */}
            <button onClick={()=>{
                money.current = money.current+1;
                console.log(money.current);
            }}>Increment</button>

        </>
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);