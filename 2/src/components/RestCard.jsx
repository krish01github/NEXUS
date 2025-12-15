import { Link } from "react-router";

export default function RestCard({ restInfo }) {
    return (
      <div className="w-full max-w-[300px] mx-auto transform transition duration-200  hover:scale-98">
        <Link to={"/city/delhi/" + restInfo.info.id}>
        <div className="aspect-4/3 overflow-hidden rounded-2xl">
          <img
            className="w-full h-full object-cover"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/" +
              restInfo.info.cloudinaryImageId
            }
          />
        </div>
  
        <div className="w-[95%] mx-auto mt-2">
          <p className="font-bold text-xl">{restInfo.info.name}</p>
          <div className="flex items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-green-400">
                <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.175L12 18.896 4.664 23.173l1.402-8.175L0.132 9.21l8.2-1.192z" />
            </svg>
            <p className="text-l font-bold">
                {restInfo.info.avgRatingString}
            </p>
          </div>
          <p className="text-l font-bold">Time : {restInfo.info.sla.slaString}</p>
          <div>
            {
                restInfo.info.cuisines.join(" ")
            }
          </div>
        </div>
        </Link>
      </div>
    );
  }
  