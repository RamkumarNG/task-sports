import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        name:"rcb",
        players:0,
        id:'1'
    },
    {
        name:"csk",
        players:0,
        id:'2'
    }
]

const teamSlice = createSlice({
    name:"teams",
    initialState,
    reducers:{
        addTeam(state, action){
            return [...state, action.payload]
        }
    }
})

export const {addTeam} = teamSlice.actions;

export default teamSlice.reducer;