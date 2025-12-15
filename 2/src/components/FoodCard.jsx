export default function FoodCard({foodData}){

    return(
        <>
            <a href={foodData?.action?.link} className="flex-none">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/"+foodData?.imageId}  alt="p"  className="w-40 h-50 mt-20 object-cover"/>
            </a>
        </>
    )
}