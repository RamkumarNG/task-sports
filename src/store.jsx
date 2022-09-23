import { configureStore } from "@reduxjs/toolkit";
import playersReducers from "./Slices/playerSlice";
import teamReducers from "./Slices/teamSlice";

export const store = configureStore({
    reducer: {
        players: playersReducers,
        teams: teamReducers
    }
})