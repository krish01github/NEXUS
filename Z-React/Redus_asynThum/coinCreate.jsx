import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FetchData } from "./sliceasyn";
import Fun from "./Fun";

export default function CoinCreate(){
    const dispatch = useDispatch();

    const { loading,data, error} = useSelector((state)=>state.slicing);

    useEffect(()=>{
        dispatch(FetchData(20));// its a function not a action so its type isn't mention !!
    },[])

    if(loading){
        return(
            <h1>Loading</h1>
        )
    }
    else if(error){
        return(
            <h1>Error</h1>
        )
    }
    else{
        return(
            <>
                <div style={{display:"flex", flexWrap:"wrap"}}>
                    {data.map((val)=>{
                        return <Fun key={val.id} coin={val}/>
                    })}
                </div>
            </>
        )
    }
}