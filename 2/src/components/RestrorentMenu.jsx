import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

import PizzaHut from "../utils/pizzahut";// pizza api

import MenuCard from "./MenuCard";

export default function RestorentMenu() {
    let { id } = useParams();
    console.log(id);
    const [restData, setrestData] = useState([]);

    const [selected, setSelected] = useState(null);//vegNonVeg


    useEffect(() => {
        async function fetchData() {

            // const proxyServer = "https://cors-anywhere.herokuapp.com/corsdemo";
            // const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}&submitAction=ENTER`;
            // const response = await fetch(proxyServer+swiggyAPI);
            // const resjson = await response.json();
            // const tempData = resjson?.data?.cards[5]?.groupedCard.cardGroupMap.REGULAR.cards; // all pizza cards
            // const filterDataPizza = tempData.filter((item)=>'title' in item.card.card);
            // setrestData(filterDataPizza);

            const tempData = PizzaHut?.data?.cards?.[5]?.groupedCard.cardGroupMap.REGULAR.cards; // all pizza cards
            const filterDataPizza = tempData.filter((item) => 'title' in item.card.card);
            setrestData(filterDataPizza);
            console.log(filterDataPizza);
        }
        fetchData();
    }, [])
    // Map error : undefined reading map

    // veg Non veg
    function VegNon() {
        return (
            <div className="flex w-[80%]  mx-auto">
                <button className={`font-white text-2xl py-2 px-4 ml-3 mt-20 mb-6 border rounded-2xl ${selected == 'veg' ? 'bg-green-400' : 'bg-white'}`} onClick={() => setSelected(selected == 'veg' ? null : 'veg')}>Veg</button >
                <button className={`font-white text-2xl py-2 px-4 ml-3 mt-20 mb-6 border rounded-2xl ${selected == 'non-veg' ? 'bg-red-400' : 'bg-white'}`} onClick={() => setSelected(selected == 'non-veg' ? null : 'non-veg')}>Non-veg</button>
                <button className={`font-white text-2xl py-2 px-4 ml-3 mt-20 mb-6 border rounded-2xl`} onClick={() => setSelected(null)}>ALL</button>
            </div>
        )
    }
    //Search Bar
    function SearchButton(){
        return(
             <Link to={`/city/delhi/${id}/search`}>
                <div className="flex w-[80%]  mx-auto mt-10 ">
                    <p className="rounded-2xl  w-full text-center py-4 bg-gray-100 text-2xl">Search For Dishes </p>
                </div>
            </Link>
        )
    }

    if (selected == 'veg') {
        return (
            <>
                <SearchButton/>
                {/* isVeg key exist - VEG */}
                <VegNon />
                <h1>Veg Selected!</h1>
                <div className="w-[85%] mx-auto">
                    {
                        restData.map((val) => <MenuCard key={val.card.card.title} props={val} Foodselected={selected}></MenuCard>)
                    }
                </div>
            </>
        )
    }

    if (selected == 'non-veg') {
        return (
            <>
                <SearchButton/>
                {/* isVeg key absent - Non-Veg */}
                <VegNon />
                <h1>Non-Veg Selected!</h1>
                <div className="w-[85%] mx-auto">
                    {
                        restData.map((val) => <MenuCard key={val.card.card.title} props={val} Foodselected={selected}></MenuCard>)
                    }
                </div>
            </>
        )
    }

    return (
        <>
            <SearchButton/>
            <VegNon />
            <div className="w-[85%] mx-auto">
                {
                    restData.map((val) => <MenuCard key={val.card.card.title} props={val} Foodselected={selected}></MenuCard>)
                }
            </div>
        </>
    )
}