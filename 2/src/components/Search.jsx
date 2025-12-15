import { useState , useEffect} from "react";
import { useParams } from "react-router"
import RestInfo from "./RestInfo";

import PizzaHut from "../utils/pizzahut";// pizza api

export default function Search(){
    const {id} = useParams();
    const [food,setfood] = useState('');
    const [restData, setrestData] = useState([]);

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
        }

        fetchData();
    }, [])

    function Sear({val}){
        return(
           val?.card?.card?.itemCards?.map((item) =>
           <RestInfo key={item?.card?.info?.id} item={item} />
        )
        )
    }
    return(
        <>
            <div className="w-[80%] mx-auto mt-15">
                <input 
                    placeholder="Search Here"
                    onChange={(e)=>setfood(e.target.value)} 
                    className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl"
                />
            </div>
            <div className="w-[85%] mx-auto">
                {
                    food !== ''?
                    restData.filter(item => item.card.card.itemCards?.some(item =>item.card?.info?.name?.toLowerCase().includes(food.toLowerCase())))
                    .map((val)=> <Sear val={val}  key={val.card.card.title}></Sear> )
                    : null
                }
            </div>
        </>
    )
}