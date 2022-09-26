import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeamMember, removeFromTeam } from "D:\\Course\\Projects\\react projects\\sports\\src\\Slices/teamSlice";
import {addPlayerToTeam, removePlayerFromTeam} from "D:\\Course\\Projects\\react projects\\sports\\src\\Slices/playerSlice";
import { nanoid } from "@reduxjs/toolkit";
import Create from "./Create.jsx";
import Button from "../button/Button"


const EachPlayer = ({player, currTeam, fromTeam=false}) => {

    const [viewTeam, setViewTeam] = useState(false);
    const [currteam, setTeam] = useState([]);
    const [edit, setEdit] = useState(false);
    const teams = useSelector(state => state.teams)
    const dispatch = useDispatch();

    const renderComponent = () => {
        setViewTeam(!viewTeam);
    }

    const addToPlayer = (team,pId, count) =>{
        dispatch(
            addPlayerToTeam({team, pId, count})
        )
    }
    const addToTeam = (player,  count, evt) => {
        dispatch(addTeamMember({
            currCount:count,
            id:evt.target.value,
            playerDetails:{
                name:player.name,
                age:player.age,
                nationality:player.nationality,
                role:player.role,
                pId:player.id?player.id:nanoid()
            }
        }))
        setViewTeam(!viewTeam)
    }

    const removeFromP = (tId, pId, count) => {
        dispatch(removePlayerFromTeam({
            pId, tId
        }))
    }
    const removeFromT = (tId, pId, count) => {
        dispatch(removeFromTeam({
            tId, pId, count: count
        }))
        setViewTeam(!viewTeam)
    }

    if(edit){
        return(
            <Create player = {player} />
        )
    }

    return(
        <div className="outerArea">
            <div className={fromTeam? `teamCard`:`card`} style={player.team.length!==0?{"background":`linear-gradient(to left bottom, #2a2b2a,${currteam.color})`}:{}}>
                <div className="imageBox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnHcjHlHZiuYUBkmscb2aKev6NTxtztgreDQ&usqp=CAU" alt="csa"/>
                </div>
                <div className="content">
                    <div className="details">
                        <h2>{player.name}</h2>
                        {player.team.length !== 0 && <h3>{player.team[0].tName}</h3>}
                        <span>{player.role}</span>
                        {!fromTeam?<div className="data">
                                <h3>{player.nationality}<br></br><span>Nationality</span></h3>
                                <h3>{player.age}<br></br><span>Age</span></h3>
                            </div>
                            :<></>}
                        <div className="button">
                            {player.team.length === 0 
                                    ?<><Button onClick={renderComponent} name="ADD" className="btn-submits"/><Button className="btn-edit" onClick={() => {setEdit(!edit)}} name="EDIT"/></>
                                    :<><Button onClick={() =>{ 
                                        const teamC = teams.filter(team => team.id === player.team[0].id)
                                        removeFromP(player.team[0].id, player.id, teamC[0].count); 
                                        removeFromT(player.team[0].id, player.id, teamC[0].count)}}
                                        name="REMOVE"
                                    /> {!fromTeam && <Button onClick={() => {setEdit(!edit)}}  name="EDIT"/>}</>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    {viewTeam &&
                        <div className="buttonContainer">
                            {teams.map((team) => (
                                <div className="list" key={team.id}>
                                    <button className="btn-1" style={{"boxShadow":`inset 300px 0 0 0 ${team.color}`}} value={team.id} onClick ={(evt) =>{
                                        addToPlayer(team,player.id, team.count); 
                                        addToTeam(player, team.count, evt)
                                        setTeam(team)
                                        } }>
                                            {team.tName}
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
    )
}

export default EachPlayer;