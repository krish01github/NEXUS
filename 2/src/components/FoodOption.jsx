import ImageGridCards from "../utils/foodData"
import FoodCard from "./FoodCard"

export default function FoodOption(){

    return(
        <>
            <div className="w-[80%] container mx-auto flex  gap-1  overflow-x-auto">
                {
                    ImageGridCards.map((foodData)=><FoodCard key={foodData.id} foodData={foodData}></FoodCard>)  
                }
            </div>
        </>
    )
}