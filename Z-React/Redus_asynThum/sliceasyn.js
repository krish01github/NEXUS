import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// {type : "coin/fech" , payload: data}
// FetchData(20) --> asyn(args,thunkAPI) --> args = 20!
const FetchData = createAsyncThunk(
    // Action : type & payload ! cause dispatch work is done by asyn
    'Coin/fech',
    async (args , thunkAPI) => { // async functioin 
        try{
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${args}`);
            const data = await res.json();
            return data; // This goes to payload.
        }
        catch(error){
            return rejectWithValue("Error Occured!")
        }
    }
)

const slicing = createSlice({
    name : "slicing",
    initialState : {
        data:[],
        loagding : false,
        error : null
    },
    reducers :{},// Empty cause we are talking about asyn function
    extraReducers : (builder)=>{ // builder is object!
        builder
        .addCase(FetchData.pending , (state)=>{
            state.loagding = true;
            state.error = null;
        })// type : "coin/fetch/pending"
        .addCase(FetchData.fulfilled, (state, action)=>{
            state.data = action.payload; // payload have data/error
            state.loagding = false;
        })// type: "coin/fetch/fullfilled"
        .addCase(FetchData.rejected, (state, action)=>{
            state.error = action.payload; // payload have error/data
            state.loagding = false;
        })// type: "coin/fetch/rejected"
    }
})

export {FetchData};
export default slicing.reducer;