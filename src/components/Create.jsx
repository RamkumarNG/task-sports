import { useParams } from "react-router-dom";
import useFormHooks from "../useFormHooks";
import {addPlayer} from "../Slices/playerSlice";
import {addTeam} from "../Slices/teamSlice"
import { useDispatch } from "react-redux";
import {nanoid} from "@reduxjs/toolkit"

const Create = () =>{
    const {currPage} = useParams();
    const [name, handleName, clear] = useFormHooks("");
    const [teamName, handleTeamName, clearTeam] = useFormHooks("");
    const dispatch = useDispatch();

    const handlePlayerSubmit = (evt) =>{
        evt.preventDefault();
        console.log("added")
        dispatch(
            addPlayer({
                id:nanoid(),
                name,
                teamName
            })
        )
        clear();
        clearTeam();
    }

    const handleTeamSubmit = (evt) => {
        evt.preventDefault();
        dispatch(
            addTeam({
                name,
                players:0,
                id:nanoid()
            })
        )
        clear();
    }

    if(currPage === "teams"){
        return(
            <>
                <form onSubmit={ handleTeamSubmit }>
                    <label>Team Name:</label>
                    <input type="text" value={name} onChange={handleName}></input>
                    <button type = "submit">create</button>
                </form>
            </>
        )
    }else{}
    return(
        <>
            <form onSubmit={ handlePlayerSubmit }>
                    <label htmlFor="name">Player Name:</label>
                    <input type="text" name="name" value={name} onChange={handleName}></input>
                    <label htmlFor="teamName">Team Name:</label>
                    <input type="text" name="teamName" value={teamName} onChange={handleTeamName}></input>
                    <button type="submit">create</button>
            </form>
        </>
    )
}

export default Create;