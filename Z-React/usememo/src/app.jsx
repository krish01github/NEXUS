import React, { useCallback, useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

// if you create function here its only created once ! independent function !
// cause only during re-render of App() then it get new memory function.

// so when function re-render fibo() runs again thus increse time taken to re-render
function App(){
    // counter
    const [count,setCount] = useState(0);
    const [num,setNum] = useState('');

    // expensive calculation : takes time 2^n
    const fibo = useCallback((n)=>{
        if(n<=1)
         return n;
        return fibo(n-1) + fibo(n-2);
    },[])
    // useEffect 1 render extra ; cause useEffect runs at last thus 1st render then it works & re-render again.
    const res = useMemo(()=>fibo(Number(num)),[num]);

    return(
        <>
            <h1>Counter : {count}</h1>
            <button onClick={()=>{setCount(count+1)}}>Increment</button>
            <button onClick={()=>{setCount(count-1)}}>Decrement</button>

            <div>
                <h2>Fibo number is : {res}</h2>
                <input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);