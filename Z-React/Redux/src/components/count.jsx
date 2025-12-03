import { useDispatch, useSelector } from "react-redux"
import  {Increment,Deccrement,Reset } from "../features/slice1"; 

export default function Counting(){
    const count = useSelector((globalstate)=>globalstate.slice1.count);// global state
    const dispatch = useDispatch(); // cause useDispatch don't have any argument!
    return (
        <>
            <h1>Count is {count}</h1>
            <button onClick={()=>dispatch(Increment())}>Increment</button> {/* dispatch(Increment()) will return {type : slice1/Increment} */}
            <button onClick={()=>dispatch(Deccrement())}>Decrement</button>
            <button onClick={()=>dispatch(Reset())}>Reset</button>
        </>
    )
}