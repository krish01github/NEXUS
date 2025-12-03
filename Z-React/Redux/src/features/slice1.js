import { createSlice } from "@reduxjs/toolkit";


// SLICE
const reactSlicer = createSlice({
    name: "slice1",// slicename
    initialState:{count:0}, // multiple values || return same typeof
    reducers : { // here reducers?
        Increment : (state)=>{state.count = state.count+1}, // state is the latest object
        Deccrement : (state)=>{state.count = state.count-1}, // either update draft or return new object !
        Reset : (state)=>{state.count = 0},
        CustomInc : (state,action )=>{state.count = action.payload} //payload is nothing but argument passed to reducers.
    }
})

console.log(reactSlicer); // all property , why action,rducer?

export const {Increment,Deccrement,Reset,CustomInc } = reactSlicer.actions; // count.jsx , where function are used
// cause when u dispatch it should know which slice function it is so we export it as actions 
export default reactSlicer.reducer; // reducer ! Global store!


// count:2 * get Increment so how will i get the latest value cause initialState will give 0
// we use callback just like useState function that uses callback to get previous value and update it then return it.
// const [count, setCount] = useState(0);
// setCount((preVal)=>preVal+1);