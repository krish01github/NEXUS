import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./src/contact";
import Details from "./src/detail/det";
import Zero from "./src/detail/zero";
import Home from "./src/dashboard";
import Hlo from "./src/detail/hello";
import Hi from "./src/detail/hi";
import { BrowserRouter,Routes,Route,Link } from "react-router";

function App(){
    return(
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link> {/*Default starting page*/}
            <Link to="/Contact">Contact</Link>
            <Link to="/Details">Details</Link>
        </nav>

        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/Details" element={Details()}>
                <Route index element={<Zero/>}></Route> {/*index --> default opens with /Details */}
                <Route path="Hello" element={<Hi/>}></Route> {/* no need to mention / , it starts from /Details/ */}
                <Route path="Hi" element={<Hlo/>}></Route>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);