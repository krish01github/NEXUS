import React from "react";
import ReactDOM from "react-dom/client";
import stores from "./store";
import { Provider } from "react-redux";
import CoinCreate from "./coinCreate";

function App(){
    return(
        <Provider store={stores}>
            <CoinCreate/>
        </Provider>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);