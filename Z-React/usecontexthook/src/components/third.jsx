import GlobalContext from "./global";  // <-- correct import (capital G)
import { useContext } from "react";

export default function Third() {
    const { counts, setcounts } = useContext(GlobalContext);

    return (
        <>
            <h2>I am printing {counts}</h2>
        </>
    );
}
