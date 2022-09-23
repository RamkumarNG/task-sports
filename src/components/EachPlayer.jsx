import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeamMember, removeFromTeam } from "../Slices/teamSlice";
import {addPlayerToTeam, removePlayerFromTeam} from "../Slices/playerSlice";
import { nanoid } from "@reduxjs/toolkit";

const EachPlayer = ({player, currTeam, fromTeam=false}) => {

    const [viewTeam, setViewTeam] = useState(false);
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
                pId:nanoid()
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

    return(
        <div className="outerArea">
            <div className={fromTeam? `teamCard`:`card`}>
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
                            {player.team.length === 0 ? <button onClick={renderComponent}>Add to team</button>
                                    :<button className="button" onClick={() =>{ 
                                        const teamC = teams.filter(team => team.id === player.team[0].id)
                                        removeFromP(player.team[0].id, player.id, teamC[0].count); 
                                        removeFromT(player.team[0].id, player.id, teamC[0].count)}}>
                                            Remove
                                    </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                    {viewTeam &&
                        <div className="buttonContainer">
                            {teams.map((team) => (
                                <div className="list">
                                    <button className ={team.name!==""?`btn-1-${team.tName.toUpperCase()}`:`btn-1}`} value={team.id} onClick ={(evt) =>{
                                        addToPlayer(team,player.id, team.count); 
                                        addToTeam(player, team.count, evt)
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