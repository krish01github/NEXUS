// import { useState } from "react";

import { addItem,IncrementItem,DecrementItem } from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function RestInfo({ item }) {
  // const [count, setcount] = useState(0); || can't use cause it remain for temp
  const items  = useSelector(state=> state.cartSlice.item);
  const ele = items.find(i=> i.id === item.card.info.id);
  const count = ele? ele.quantity : 0;
  const dispatch = useDispatch();

  function handleItem(){
    dispatch(addItem(item?.card?.info));
  }
  function handleInc(){
    dispatch(IncrementItem(item?.card?.info));
  }
  function handleDec(){
    dispatch(DecrementItem(item?.card?.info));
  }

  return (
    <div className="flex w-full justify-between gap-6 p-5 border-b border-gray-200 hover:bg-gray-50 transition rounded-xl">
      
      {/* Left content */}
      <div className="w-[70%] space-y-2">
        <p className="text-lg font-semibold text-gray-900">
          {item?.card?.info?.name}
        </p>

        <p className="text-gray-800 font-semibold">
          ₹ {item.card.info.defaultPrice 
              ? item.card.info.defaultPrice / 100 
              : item.card.info.price / 100}
        </p>

        <div className="flex items-center gap-2 text-sm">
          <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-md font-semibold">
            ⭐ {item?.card?.info?.ratings?.aggregatedRating?.rating || "NEW"}
          </span>
          <span className="text-gray-500">
            {item?.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
          </span>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, adipisci!
        </p>
      </div>

      {/* Right image + controls */}
      <div className="w-[22%] relative flex flex-col items-center">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            item?.card?.info?.imageId
          }
          className="w-full h-36 object-cover rounded-xl shadow-md"
        />

        {count === 0 ? (
          <button
            onClick={()=>handleItem()}
            className="absolute -bottom-3 bg-white px-6 py-1.5 rounded-lg 
                       text-green-600 font-bold text-sm border border-gray-200
                       shadow-md hover:bg-green-50 hover:scale-105 transition"
          >
            ADD
          </button>
        ) : (
          <div
            className="absolute -bottom-3 flex items-center gap-4 
                       bg-white px-4 py-1.5 rounded-lg border
                       shadow-md text-green-600 font-bold"
          >
            <button
              onClick={() => handleDec()}
              className="hover:text-green-800 transition"
            >
              −
            </button>

            <span className="text-gray-800">{count}</span>

            <button
              onClick={() => handleInc()}
              className="hover:text-green-800 transition"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
