import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

const Store = configureStore({
    reducer:{
        cartSlice:CartReducer,
    }
});

export default Store;