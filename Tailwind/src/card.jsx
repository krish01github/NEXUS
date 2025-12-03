import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function App(){
    return(
        <>
            <div className="max-w-50 overflow-hidden bg-white">
                <div>
                    <img  alt="Photo" />
                </div>

                <div className="mt-2 font-bold text-2xl">
                    <h1>BioGraphy</h1>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eaque officia architecto eligendi ipsum est ratione dolorum. Deserunt, cum quasi!</p>
                </div>

                <div>
                    <button>
                        Know More..
                    </button>
                </div>
            </div>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)
