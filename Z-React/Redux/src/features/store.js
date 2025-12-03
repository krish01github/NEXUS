import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./slice1";

// Global Store : Access to all File !
const stores = configureStore({
    reducer : {
        slice1: slice1Reducer // .. such many slices
    }
});

export default stores;