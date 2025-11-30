import { createSlice } from "@reduxjs/toolkit";

const FoodSlicer = createSlice({
    name: "Slice1",
    initialState: {count: 0},
    reducers : {
        addItem : (state)=>{state.count += 1},
        removeItem : (state)=>{state.count -= 1}
    }
})

export default FoodSlicer.reducer;
export const {addItem, removeItem} = FoodSlicer.actions;