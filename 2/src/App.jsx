// React :
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";


// Components :
import Home from "./components/Home";
import Restorent from "./components/Restorent";
import RestorentMenu from "./components/RestrorentMenu";
import Search from "./components/Search";
import SecondaryHome from "./components/SecondaryHome";
import CheckOut from "./components/CheckOut";

// Global / slicer
import  Store  from "./store/store";
import { Provider } from "react-redux";

function App(){
    return (
        <>
        <Provider store={Store}>
            <BrowserRouter>
                
                <Routes>
                    <Route path="/" element={<Home></Home>}></Route>
                    <Route element={<SecondaryHome></SecondaryHome>}> {/*Layout ROute*/}
                        <Route path="/restorent" element={<Restorent></Restorent>}></Route>
                        <Route path="/city/delhi/:id" element={<RestorentMenu></RestorentMenu>}></Route>
                        <Route path="/city/delhi/:id/search" element={<Search></Search>}></Route>
                    </Route>
                    <Route path="/checkout" element={<CheckOut></CheckOut>}></Route>
                </Routes>
            </BrowserRouter>
            </Provider>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);