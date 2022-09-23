import { useParams } from "react-router-dom";
import useFormHooks from "../useFormHooks";
import {addPlayer} from "../Slices/playerSlice";
import {addTeam} from "../Slices/teamSlice"
import { useDispatch } from "react-redux";
import {nanoid} from "@reduxjs/toolkit"
import { useRef } from "react";
import Input from "./Input";
import "../scss/create.scss";
import "../scss/form.scss";

const Create = () =>{

    const {currPage} = useParams();

    const [name, handleName, clear] = useFormHooks("");
    const [teamName, handleTeamName, clearTeam] = useFormHooks("");
    const [age, handleAge, clearAge] = useFormHooks();
    const [nationality, handleNationality, clearN] = useFormHooks("");
    const [role, handleROle, clearR] = useFormHooks("");

    const nameRef = useRef("");
    const teamNameRef = useRef("");
    const ageRef = useRef("");
    const nationalityRef = useRef("");
    const roleRef = useRef("");

    const dispatch = useDispatch();

    const handlePlayerSubmit = (evt) =>{
        evt.preventDefault();
        console.log("handle");
        dispatch(
            addPlayer({
                name,
                team:[],
                id:nanoid(),
                role,
                age,
                nationality
            })
        )
        clear();
        clearAge();
        clearN();
        clearR();
    }

    const handleTeamSubmit = (evt) => {
        console.log("team handle")
        evt.preventDefault();
        dispatch(
            addTeam({
                tName:teamName,
                players:[],
                id:nanoid(),
                count:0
            })
        )
        clearTeam();
    }

    if(currPage === "teams"){
        return(
            <>
                <div className="form-container">
                    <div className="form-row">
                        <div className="form-field">
                            <div className="player-form">
                                <form className="form" onSubmit={ handleTeamSubmit }>
                                    <h2>CREATE TEAM</h2>
                                    <div className="form_group">
                                        <Input id="teamName" ref={teamNameRef} value={teamName} onChange={handleTeamName} type="text" />
                                    </div>
                                    <div className="buttonContainer">
                                        <button className="btn-submit" type = "submit">create</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                <div>
                    </div>
                    </div>
            </>
        )
    }
    return(
        <>
            <div className="form-container">
                <div className="form-row">
                    <div className="form-field">
                        <div className="player_form">
                            <form className="form" onSubmit={ handlePlayerSubmit }>
                                    <h2>CREATE PLAYER</h2>
                                <div className="form_group">
                                    <Input type="text" id="name" ref={nameRef} onChange={handleName} value={name}/>
                                </div>
                                <div className="form_group">
                                    <Input type="text" id="nationality" ref={nationalityRef} onChange={handleNationality} value={nationality}/>
                                </div>
                                <div className="form_group">
                                    <Input type="number" id="age" ref={ageRef} value={age} onChange={handleAge}/>
                                </div>
                                <div className="form_group">
                                    <Input type="text" id="role" ref={roleRef} value={role} onChange={handleROle}/>
                                </div>
                                    {/* <label htmlFor="name">Player Name:</label>
                                    <input type="text" name="name" value={name} onChange={handleName}></input>
                                    <label htmlFor="natioanlity">National:</label>
                                    <input type="text" name="nationality" value={nationality} onChange={handleNationality}></input>
                                    <label htmlFor="age">Age:</label>
                                    <input type="number" name="age" value={age} onChange={handleAge}></input>
                                    <label htmlFor="role">Role:</label>
                                    <input type="text" name="role" value={role} onChange={handleROle}></input> */}
                                <div className="buttonContainer">
                                    <button className="btn-submit" type="submit">create</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create;