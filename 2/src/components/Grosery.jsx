import imageGridCardsV from "../utils/vegData";
import GroseryCard from "./Gcard";

export default function Grosery(){

    return(
        <>
            <div className="mt-10 w-[80%] container mx-auto">
                <h1 className="text-2xl">Grocery instamart </h1>
                <div className="container mx-auto flex overflow-x-auto gap-4 ">
                    {
                        imageGridCardsV.map((gData)=><GroseryCard key={gData.id} gData={gData}></GroseryCard>)  
                    }
                </div>
            </div>
        </>
    )
}