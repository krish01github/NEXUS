// First Div : swiggy logo, links
import { Link } from "react-router"
export default function Header(){
    return (
        <header className="bg-[#ff5200] font-serif">
            <div className="flex justify-between container mx-auto py-8">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png" alt="Image!" className="w-40 h-12"/>
                <div className=" text-white text-base font-bold flex items-center  gap-6.5 ">
                    <a href="https://www.swiggy.com/corporate/" target="_blank">Swiggy Corporate</a>
                    <a href="https://partner.swiggy.com/login#/swiggy" target="_blank">Partner With Us</a>
                    <a href="" target="_blank" className="border  border-white py-5 px-4  rounded-2xl">Get the App</a>
                    <a href="" target="_blank" className="py-5 px-4 border border-black bg-black  rounded-3xl">Sign In</a>
                </div>
            </div>

            <div className="pt-16 pb-8 relative">
                <img className="h-110 w-60 absolute top-0 left-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="Image" />
                <img className="h-110 w-60 absolute top-0 right-0"  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="Image" />

                <div className="max-w-[60%] text-4xl text-white container mx-auto text-center  font-bold">
                    Order food & groceries. Discover best restaurants. Swiggy it!
                </div>

                <div className="max-w-[65%] container mx-auto flex mt-10 gap-5">
                    <input className="bg-white w-[40%] text-0.8xl px-6 py-4 rounded-2xl" placeholder="Delhi, India"></input>
                    <input className="bg-white w-[55%] text-0.8xl px-6 py-4 rounded-3xl" placeholder="Search for restaurant and items for more"></input>
                </div>
            </div>

            <div className="max-w-[80%] container mx-auto flex flex-wrap justify-around">
                {/* <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="h-60 w-60 "  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="photo" />
                </a> */}
                <Link to="/restorent">
                <img className="h-60 w-60 "  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="photo" />
                </Link>

                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="h-60 w-60" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="photo" />
                </a>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="h-60 w-60" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="photo" />
                </a>
                <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1">
                    <img className="h-60 w-60" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="photo" />
                </a>
            </div>
        </header>
    )
}