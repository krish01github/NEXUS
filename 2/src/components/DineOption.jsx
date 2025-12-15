import DineOutRestaurent from "../utils/DineData"
import DineCard from "./DineCard"

export default function DineOption(){
    return(
        <div className="w-[80%] mx-auto mt-20">
            <h2 className="text-3xl font-bold mb-20">Discover best restaurant on discount!</h2>

            <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4">
                {
                    DineOutRestaurent.map((RestData)=><DineCard key={RestData.info.id} RestData={RestData}></DineCard>)
                }
            </div>
        </div>
    )
}