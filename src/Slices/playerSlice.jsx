import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    { name:"kohli", team:"", id:'1'},
    { name: "abd", team:"", id:'2'}
]

const playerSlice = createSlice({
    name:'players',
    initialState,
    reducers:{
        addPlayer(state = {initialState}, action){
            return [...state, action.payload]
        }
    }
})

export const {addPlayer} = playerSlice.actions

export default playerSlice.reducer;