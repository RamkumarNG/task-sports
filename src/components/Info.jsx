import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import EachPlayer from "./EachPlayer.jsx";
import "../scss/info.scss"

const Info = () =>{
    
    const {currPage, id} = useParams();
    const players = useSelector(state => state.players);
    const teams = useSelector(state => state.teams);

    if(currPage === "players"){
        const player = players.find((player) => player.id === id)
        return(
           <EachPlayer player={player} teams={teams} fromTeam={false} />
        )
    }
    const team = teams.find((team) => team.id === id)
    return(
        <>
            <div className="outerArea">
                <div className="card" style={{height:"230px"}}>
                    <div className="imageBox">
                        <img src="https://pbs.twimg.com/media/EQtmN0fUcAAnCyu?format=jpg&name=small" alt="teamimage"/>
                    </div>
                    <div className="content">
                        <div className="details">
                            <h2>{team.tName}</h2>
                            <span>Name</span>
                            <h2>{team.count}</h2>
                            <span>No of Players</span>
                        </div>
                    </div>
                </div>
                {team.players.length > 0 &&
                    <div className="playerDetails">
                        {players.map((player) => (
                            (player.team.length > 0 && (player.team[0].tName === team.tName) &&
                                <>
                                {console.log("wqiyeuqw",player, team)}
                                    <EachPlayer player={player} teams={team} fromTeam={true} />
                                </>
                            )
                        ))}
                </div>
                }
            </div>
        </>
    )
}

export default Info;