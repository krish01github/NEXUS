import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function RestHeader() {

  const val = useSelector(state => state.cartSlice.count);

    return (
      <header className="w-full px-8 py-4 flex items-center justify-between 
                         bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
  
        {/* Left */}
        <div className="text-2xl font-extrabold tracking-tight text-orange-500">
          Swiggy
        </div>
  
        {/* Right */}
        <div className="flex items-center gap-6">
          <Link to="/checkout">
          <button className="relative text-gray-700 hover:text-orange-500 transition">
            <span className="text-lg font-medium">Cart {`${val}`}
            </span>
          </button>
          </Link>
        </div>
  
      </header>
    );
  }
  