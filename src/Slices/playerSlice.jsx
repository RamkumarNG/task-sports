import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    { name:"Kohli", team:[], id:'1', role:"Batter", age:35, nationality:"India"},
    { name: "Abd", team:[], id:'2', role:"Batter", age:36, nationality:"South Africa"}
]

const playerSlice = createSlice({
    name:'players',
    initialState,
    reducers:{
        addPlayer(state = {initialState}, action){
            const idx = state.findIndex(s => s.id === action.payload.id)
            console.log("idx",idx)
            if(idx === 1){
                console.log("updated")
                state[idx].name = action.payload.name;
                state[idx].age = action.payload.age;
                state[idx].role = action.payload.role;
                state[idx].nationality = action.payload.nationality
            }
            else{
                console.log("added");
                return [...state, action.payload]
            }
        },
        addPlayerToTeam(state, action){
            const idx = state.findIndex(s => s.id === action.payload.pId)
            state[idx].team.push(action.payload.team)
            console.log("player added to team", state[idx].team.length)
        },
        removePlayerFromTeam(state, action){
            const idx = state.findIndex(s => s.id === action.payload.pId)
            state[idx].team = []
            console.log("player removed")
        }
    }
})

export const {addPlayer, addPlayerToTeam, removePlayerFromTeam} = playerSlice.actions

export default playerSlice.reducer;