import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";

function StopWatch(){
    const [time, setTime] = useState(0);

    const intervalRef = useRef(null);// holds reference of setInterval

    function start(){// or cause time pass to this function is constant
        if(intervalRef.current==null){
            intervalRef.current  = setInterval(()=>{ //holds reference
                setTime(pretime=>pretime+1);// Latest value will be updated
                console.log("work");
            },1000);
        }
    }

    function stop(){
        if(intervalRef.current!=null){
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    function end(){
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setTime(0);
    }

    return(
        <>
            <h1>Stop Watch : {time}</h1>
            <button onClick={()=>{start()}}>Reset</button>
            <button onClick={()=>{stop()}}>Stop</button>{/*use when argument is needed*/}
            <button onClick={end}>Restart</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>);