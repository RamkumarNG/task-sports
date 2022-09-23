import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        tName:"RCB",
        players:[],
        id:'1',
        count:0
    },
    {
        tName:"CSK",
        players:[],
        id:'2',
        count:0
    }
]

const teamSlice = createSlice({
    name:"teams",
    initialState,
    reducers:{
        addTeam(state, action){
            console.log("team added");
            return [...state, action.payload]
        },
        addTeamMember:(state, action)=>{
            const idx = state.findIndex(s => s.id === action.payload.id)
            state[idx].players.push(action.payload.playerDetails)
            state[idx].count = action.payload.currCount + 1
        },
        removeFromTeam: (state, action) => {
            const idx = state.findIndex(s => s.id === action.payload.tId)
            state[idx].players = state[idx].players.filter(player => player.id !== action.payload.pId)
            state[idx].count = action.payload.count - 1
        }
    }
})

export const {addTeam, addTeamMember, removeFromTeam} = teamSlice.actions;

export default teamSlice.reducer;