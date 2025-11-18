import React,{useState} from "react"; // React is default , useState is other function 
import ReactDOM from 'react-dom/client';
//  React says : I will do the DOM manupulation.

function Counter() {
    // let count = 0;
    let [count, setCount] = useState(0); 

    function incrementnumeber(){
        count +=1;
        // console.log(count);
        setCount(count);
        // Make changes in UI ?
        // document.querySelector('h1').innerText = `count is ${count}`;// But this is mannual 
    }
    function dec(){
        count -=1;
        setCount(count);
    }

    return (
        <div className="first">
            <h1 className="">Count is {count}</h1>
            <button className="" onClick={incrementnumeber}>Increment {count}</button>
            <button className="" onClick={dec}>Decrement {count}</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Counter/>);
