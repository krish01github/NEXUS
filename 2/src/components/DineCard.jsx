export default function DineCard({ RestData }) {
    return (
        <div className="max-w-sm flex-none">
            <a href={RestData?.cta?.link} target="_blank">
            <div className="relative">

                <img
                    src={
                        "https://media-assets.swiggy.com/swiggy/image/upload/" +
                        RestData?.info?.mediaFiles?.[0]?.url
                    }
                    className="w-80 h-50 object-cover rounded-2xl"
                />

                {/* Gradient below text */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-black/90 via-black/40 to-transparent z-10 rounded-b-2xl"></div>

                {/* Text above gradient */}
                <p className="absolute bottom-2 left-2 text-white text-xl font-semibold z-20">
                    {RestData?.info?.name}
                </p>

                <p className="absolute bottom-2 right-2 text-white text-xl font-semibold z-20">
                    {RestData?.info?.rating?.value}
                </p>

            </div>
            </a>
        </div>
    )
}