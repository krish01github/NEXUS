export default function GroseryCard({ gData }) {

    return (
        <>  
            {/* Don't grow, don't shrink, keep your natural size. */}
            <div className="flex-none">
                <a href={gData?.action?.link}>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/" + gData?.imageId} alt="p" className="w-40 h-50 mt-20 object-cover" />
                </a>
                <h2 className="text-center">{gData?.action?.text}</h2>
            </div>
        </>
    )
}