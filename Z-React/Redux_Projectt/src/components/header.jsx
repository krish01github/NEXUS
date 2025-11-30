import { useSelector } from "react-redux"

export default function Header(){
    const count = useSelector((state)=>state.Slice1.count);// to read count 

    return (
        <div style={{textAlign:"center"}}>
            <h1>Swiggy</h1>
            <h2>Card : {count}</h2>
        </div>
    )
}