import { createSlice } from "@reduxjs/toolkit";

// 1st time cart item sent store it 
// If same item sent again then just increse its quantity ! Not storing it again
// Decrese

const cart = createSlice({
    name : 'cartSlice',
    initialState : {
        // In recived object add another key To keep track of quantity!
        item:[],
        count:0,
    },
    reducers:{
        // Add item
        addItem : (state, action)=>{
            state.item.push({...action.payload,quantity:1 }); // ... cause non-primitive store by ref
            state.count += 1;
        },
        IncrementItem : (state, action)=>{
            const element = state.item.find(item=> item.id === action.payload.id);
            element.quantity += 1;
            state.count += 1;
        },
        DecrementItem: (state, action)=>{
            const element = state.item.find(item=> item.id === action.payload.id);
            if(element.quantity > 1)
            element.quantity -= 1;
            else{
                state.item = state.item.filter(item => item.id!=action.payload.id);
            }
            state.count -= 1;
        }
    }
})

export const {addItem, IncrementItem, DecrementItem} = cart.actions;
export default cart.reducer;