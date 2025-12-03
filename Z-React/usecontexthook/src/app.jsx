import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Second from "./components/second";
import GlobalContext from "./components/global";

function App(){
    const [count, setCount] = useState(0);

    return (
        <>
            <GlobalContext.Provider value={{counts:count, setCounts:setCount}}>
            <h1>Timer : {count}</h1>
            <Increment counts = {count} setCounts = {setCount}/>
            <Decrement counts = {count} setCounts = {setCount}/>
            <Second/>
            </GlobalContext.Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);