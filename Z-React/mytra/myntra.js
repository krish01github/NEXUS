// Import React & ReactDOM 
import React,{useState} from "react";
import ReactDOM from "react-dom/client";

// Header
function Header(){
    return (
        <div className="Heading">
            <img className="ima"  src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/98/15/19/9815196a-3716-aaee-891b-189e2c315eb8/Placeholder.mill/1200x630wa.jpg" height={30} width={45}/>
            <div className="opt">
                <button className="but">Men</button>
                <button className="but">Women</button>
                <button className="but">Kids</button>
                <button className="but">Beauty</button>
                <button className="but">Studio</button>
            </div>
            <input className="search"  placeholder="Enter "></input>
            <div className="tpo" >
                <button className="pro" >Profile</button>
                <button className="pro" >WishList</button>
                <button className="pro" >Reg</button>
            </div>
        </div>
    )
}

// body


function Card(props) {
    return (
        < div style={{ border: "2px solid black", padding: "10px" }} className="car">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fimages.panda.org%2F&psig=AOvVaw0ck8e1pQMGhE9EYarxjA9d&ust=1763357457918000&source=images&cd=vfe&opi=89978449&ved=0CAMQjB1qFwoTCPig-cj49ZADFQAAAAAdAAAAABAE " height="200px" width="180px" />

            <div style={{ textAlign: "center" }}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
                <h2>Price {props.price}</h2>
            </div>
        </div>
    )
}

// footer

function Footer(){
    return(
        <img className="sss"  src="https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/98/15/19/9815196a-3716-aaee-891b-189e2c315eb8/Placeholder.mill/1200x630wa.jpg" height="200px" width="1200px"/>
    )
}

const arr = [{
    p:12,
    cloth: "T-shirt",
    offer: "20-30% off"
}, {
    p:16,
    cloth: "Skirt",
    offer: "10-20% off"
}, {
    p:122,
    cloth: "T-shirt",
    offer: "20-30% off"
}, {
    p:120,
    cloth: "T-shirt",
    offer: "20-30% off"
} , {
    p:24,
    cloth: "T-shirt",
    offer: "20-30% off"
},{
    p:32,
    cloth: "T-shirt",
    offer: "20-30% off"
} ,{
    p:90,
    cloth: "T-shirt",
    offer: "20-30% off"
}, {
    p:80,
    cloth: "T-shirt",
    offer: "20-30% off"
}];

function App() {
    let [narr, nass] = useState(arr);// use Narr as our datasets
    // cause don't let you original array change!
    function arrsort(){
        narr.sort((a,b)=>a.p-b.p); 
        nass([...narr]);// clone array 
    }
    function priceAb(){
        const Bkl = arr.filter((value)=> value.p > 50);// .filter() return new array.
        nass(Bkl);
    }
    return (
        <>
            <Header />
            <button className="butt" onClick={arrsort}>Sort by price!</button>
            <button className="butt" onClick={priceAb}>Price Poll!</button>
            <div className="midd"  style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {
                    // arr.map() will return an array.
                    narr.map((value, index) => <Card key={index} cloth={value.cloth} offer={value.offer} price={value.p} />)//Jsx so {}
                    // React receives this array and renders each element automatically.
                }
            </div>
            <div className="sss">
                 <Footer/>
            </div>
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App />);