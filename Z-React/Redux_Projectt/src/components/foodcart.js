import { useState } from "react";
import  {addItem, removeItem} from "../features/slice"
import { useDispatch } from "react-redux";
// Each cart have its own iscart !
export default function FoodCart(props){
    const dispatch = useDispatch();// dispatch to use reducers from slice

    const [iscart , setincart] = useState(true);
    function handleClk(){
        if(iscart==true){
            dispatch(addItem());
            setincart(!iscart);
        }
        else{
            dispatch(removeItem());
            setincart(!iscart);
        }
    }
    return(
        <>
            <h1>{props.value}</h1>
            <h2>{props.food}</h2>
            <button onClick={handleClk}>{iscart? "Add":"Remove"}</button>
        </>
    )
}