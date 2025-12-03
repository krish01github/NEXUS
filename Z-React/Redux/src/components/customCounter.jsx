import { useState } from "react"
import { useDispatch } from "react-redux";
import { CustomInc } from "../features/slice1";

export default function CustomCounter(){
    const [val, setval] = useState('');// why not in global cause it need not to be shared!
    const dispatch = useDispatch();

    function handclick(){
        // for(let i=0;i<val;i++) or create a new function global & slice
        dispatch(CustomInc(Number(val)));
    }
    return(
        <>
            <input type="number" onChange={(e)=>setval(e.target.value)} value={val}/>
            <button onClick={handclick}>Submit</button>
        </>
    )
}