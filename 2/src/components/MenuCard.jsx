import { useState } from "react";
import RestInfo from "./RestInfo"

export default function MenuCard({ props, Foodselected }) {
    const [isOpen, setisOpen] = useState(true);

    // Categories  : don't exist

    if (!isOpen) {
        return (
            <div className="w-full py-3">
                <div className="flex justify-between items-center w-full">
                    <p className="text-2xl font-bold">{props.card.card.title}</p>
                    <button
                        className="text-3xl mr-10 hover:scale-110 transition"
                        onClick={() => setisOpen(!isOpen)}
                    >
                        {isOpen ? '▴' : '▾'}
                    </button>
                </div>

                <div className="h-2 w-full bg-blue-200"></div>
            </div>
        )
    }

    {/* veg & non-veg off normal:Default || veg on non-veg off || non-veg on veg off */ }
    // Default 

    if (Foodselected == 'veg') {
        return (
            <>
                <div className="w-full py-4">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-3xl font-bold">{props.card.card.title}</p>
                        <button
                            className="text-5xl font-bold mr-15 hover:scale-110 transition"
                            onClick={() => setisOpen(!isOpen)}
                        >
                            {isOpen ? '^' : 'v'}
                        </button>
                    </div>

                    <div className="mt-4 space-y-3">
                        {
                            props?.card?.card?.itemCards?.filter((food) => 'isVeg' in food.card.info)
                            .map((item) =>
                                <RestInfo key={item?.card?.info?.id} item={item} />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }

    if (Foodselected == 'non-veg') {
        return (
            <>
                <div className="w-full py-4">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-3xl font-bold">{props.card.card.title}</p>
                        <button
                            className="text-5xl font-bold mr-15 hover:scale-110 transition"
                            onClick={() => setisOpen(!isOpen)}
                        >
                            {isOpen ? '^' : 'v'}
                        </button>
                    </div>

                    <div className="mt-4 space-y-3">
                        {
                            props?.card?.card?.itemCards?.filter((food) => !('isVeg' in food.card.info))
                            .map((item) =>
                                <RestInfo key={item?.card?.info?.id} item={item} />
                            )
                        }
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-full py-4">
                <div className="flex justify-between items-center w-full">
                    <p className="text-3xl font-bold">{props.card.card.title}</p>
                    <button
                        className="text-5xl font-bold mr-15 hover:scale-110 transition"
                        onClick={() => setisOpen(!isOpen)}
                    >
                        {isOpen ? '^' : 'v'}
                    </button>
                </div>

                <div className="mt-4 space-y-3">
                    {
                        props?.card?.card?.itemCards?.map((item) =>
                            <RestInfo key={item?.card?.info?.id} item={item} />
                        )
                    }
                </div>
            </div>
        </>
    )
}
