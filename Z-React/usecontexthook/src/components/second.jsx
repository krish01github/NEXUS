import { useContext } from "react";
import GlobalContext from "./global";
import Third from "./third";

export default function Second(){
    const { count, setCount } = useContext(GlobalContext);

    return (
        <>
            <h2>Kaise hoo?? {count}</h2>
            <Third />
        </>
    );
}
