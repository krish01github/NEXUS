import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import stores from "./features/globalStore";
import Header from "./components/header";
import Card from "./components/card";



function App(){
    return(
        <>
        <Provider store={stores}>
            <Header/>
            <Card/>
        </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);