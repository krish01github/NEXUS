import { Link, Outlet } from "react-router";
export default function Details(){
    return (
        <>
            <nav>
                <Link to="Hi">HI</Link>
                <Link to="Hello">HELLO</Link>
            </nav>
            <h1>Welcome to Details !</h1>
            <Outlet/>
        </>
    )
}