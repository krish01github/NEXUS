export default function Shimer() {
    return (
      <div className="w-full max-w-[300px] mx-auto animate-pulse">
        
        {/* Image skeleton */}
        <div className="aspect-4/3 overflow-hidden rounded-2xl bg-gray-300"></div>
  
        {/* Text + rating skeleton */}
        <div className="w-[95%] mx-auto mt-3 space-y-3">
  
          {/* Title */}
          <div className="h-5 bg-gray-300 rounded"></div>
  
          {/* Rating row */}
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-10 bg-gray-300 rounded"></div>
          </div>
  
          {/* Time */}
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
  
          {/* Cuisines */}
          <div className="h-4 w-40 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  }
  