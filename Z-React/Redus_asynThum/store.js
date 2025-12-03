import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./sliceasyn"; // default

const stores = configureStore({
    reducer : {
        slicing: sliceReducer
    }
})

export default stores;