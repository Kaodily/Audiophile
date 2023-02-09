import { createSlice } from "@reduxjs/toolkit";


const generalSlice = createSlice({
    name:"general",
    initialState:{
      isNav:false
    },
    reducers:{
    openNav(state){
      state.isNav = !state.isNav
    }
    }
})

export const generalActions = generalSlice.actions;

export default generalSlice