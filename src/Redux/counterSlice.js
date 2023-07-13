import { createSlice } from "@reduxjs/toolkit"
export const counterSlice=createSlice({
 name:"counter",
 initialState:{
    numbervalue:0
 },
 reducers:{
    incrementData:(state)=>{
        state.numbervalue=state.numbervalue+1
    },
    decrementData:(state)=>{
        state.numbervalue=state.numbervalue+1
    },
 }
})

