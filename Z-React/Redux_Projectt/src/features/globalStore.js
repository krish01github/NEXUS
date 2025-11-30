import { configureStore } from "@reduxjs/toolkit";
import FoodSlicer from "./slice";

const stores = configureStore({
    reducer:{
        Slice1: FoodSlicer
    }
})
export default stores;