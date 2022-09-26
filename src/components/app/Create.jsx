import { useParams } from "react-router-dom";
import useFormHooks from "D:\\Course\\Projects\\react projects\\sports\\src\\customHooks/useFormHooks.jsx";
import {addPlayer} from "D:\\Course\\Projects\\react projects\\sports\\src\\Slices/playerSlice";
import {addTeam} from "D:/Course/Projects/react projects/sports/src/Slices/teamSlice.jsx"
import { useDispatch } from "react-redux";
import {nanoid} from "@reduxjs/toolkit"
import { useRef } from "react";
import Input from "../input/Input";
import Button from "../button/Button";
import "D:\\Course\\Projects\\react projects\\sports\\src\\scss\\create.scss";
import "D:\\Course\\Projects\\react projects\\sports\\src\\scss\\form.scss";

const Create = ({player}) =>{

    const {currPage} = useParams();

    const [name, handleName, clear] = useFormHooks(player!==undefined?player.name:"");
    const [teamName, handleTeamName, clearTeam] = useFormHooks("");
    const [age, handleAge, clearAge] = useFormHooks(player!==undefined?player.age:"");
    const [nationality, handleNationality, clearN] = useFormHooks(player!==undefined?player.nationality:"");
    const [role, handleROle, clearR] = useFormHooks(player!==undefined?player.role:"");
    const[color, handleColor, clearC] = useFormHooks("#65432");

    const nameRef = useRef("");
    const teamNameRef = useRef("");
    const ageRef = useRef("");
    const nationalityRef = useRef("");
    const roleRef = useRef("");
    const colorRef = useRef("");

    const dispatch = useDispatch();

    const handlePlayerSubmit = (evt) =>{
        evt.preventDefault();
        // console.log("c:",player.id)
        dispatch(
            addPlayer({
                name,
                team: player!==undefined?player.team:[],
                id: player!==undefined?player.id: nanoid(),
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
        evt.preventDefault();
        dispatch(
            addTeam({
                tName:teamName,
                players:[],
                id:nanoid(),
                count:0,
                color
            })
        )
        clearTeam();
        clearC();
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
                                        <Input id="teamName" ref={teamNameRef} value={teamName} onChange={(evt) => handleTeamName(evt.target.value)} type="text" />
                                        <Input id="colorPicker" ref={colorRef} type="color" value={color} onChange={(evt) => handleColor(evt.target.value)}/>
                                    </div>
                                    <div className="buttonContainer">
                                        <Button className="btn-submit" type="submit" name="create" />
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
                                    <Input type="text" id="name" ref={nameRef} onChange={(evt) => handleName(evt.target.value)} value={name}/>
                                </div>
                                <div className="form_group">
                                    <Input type="text" id="nationality" ref={nationalityRef} onChange={(evt) => handleNationality(evt.target.value)} value={nationality}/>
                                </div>
                                <div className="form_group">
                                    <Input type="number" id="age" ref={ageRef} value={age} onChange={(evt) => handleAge(evt.target.value)}/>
                                </div>
                                <div className="form_group">
                                    <Input type="text" id="role" ref={roleRef} value={role} onChange={(evt) => handleROle(evt.target.value)}/>
                                </div>
                                <div className="buttonContainer">
                                    <Button className="btn-submit" name="create"/>
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