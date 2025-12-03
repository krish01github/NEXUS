import React from "react";
import ReactDOM from "react-dom/client";
import CustomCounter from "./components/customCounter";
import { Provider } from "react-redux";
import stores from "./features/store";
import Counting from "./components/count";

function App(){
    console.log(stores);
    return (
        <>
            <Provider store={stores}>
                <Counting></Counting>
                <br /><br />
                <CustomCounter/>
            </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);