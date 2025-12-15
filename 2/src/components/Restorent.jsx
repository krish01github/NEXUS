import { useEffect, useState } from "react"
import RestCard from "./RestCard";
import Shimer from "./simer";

import RestaurantsAPI from "../utils/apiResto";// manual api

export default function Restorent(){
    const [restData, setrestData] = useState([]);

    useEffect(()=>{
        async function fetchData(){
            // const proxyServer = "https://cors-anywhere.herokuapp.com/corsdemo";
            // const swiggyAPI = "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.7040592&lng=77.10249019999999&carousel=true&third_party_vendor=1";
            // const response = await fetch(proxyServer+swiggyAPI);
            // const resjson = await response.json();
            // setrestData(resjson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

             setTimeout(()=>{
                setrestData(RestaurantsAPI);// ALl food 
            },1000);

            console.log(RestaurantsAPI);

            // Course Error! If proxy server not used!
        }
        fetchData();
    },[])
    if(restData.length == 0){
        return (
            <div className="flex flex-wrap w-[90%] mx-auto justify-center  mt-15 gap-1">
                {[...Array(8)].map((_, i) => (
                    <Shimer key={i} />
                ))}
            </div>
        )
    }
    return (
        <div className="flex flex-wrap w-[90%] mx-auto justify-center  mt-15 gap-1">
            {/* cloudinaryImageId image link  */}
            {
                restData.map((restInfo)=><RestCard key={restInfo.info.id} restInfo={restInfo}></RestCard>)
            }
        </div>
    )
}