
import React from "react";
import ReactDOM from "react-dom/client";
import StarField from "./StarField";

function App() {
    return (
      <div className="w-screen h-screen">
        <StarField/>
      </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)