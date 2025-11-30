import FoodCart from "./foodcart";

const foodItems = [
    {id:1, food:"pizza", prize:"240"},
    {id:2, food:"Burger", prize:"150"},
    {id:3, food:"Chocki", prize:"80"},
    {id:4, food:"Dosa", prize:"100"},
    {id:5, food:"Poops", prize:"25"},
    {id:6, food:"samosa", prize:"15"},
    {id:7, food:"Thali", prize:"120"},
    {id:8, food:"Maggi", prize:"30"}
];

export default function Card(){
   
    return(
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"12px"}}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id} style={{border:"2px solid black", padding:"10px"}}>
                        {/* Every Food have its own inCart so use a function where for each card there is incart */}
                        <FoodCart value={value.prize} food={value.food}/>
                    </div>
                )
            })}
        </div>
    )
}