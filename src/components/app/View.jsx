import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "D:\\Course\\Projects\\react projects\\sports\\src\\scss\\main.scss";
import "D:\\Course\\Projects\\react projects\\sports\\src\\scss\\view.scss";

const View = () =>{
    const players = useSelector(state => state.players)
    const teams = useSelector(state => state.teams)

    const {currPage} = useParams();
    
    if(currPage === "teams"){
        return(
            <>
                <div className="Create">
                    <Link className="links" to="/teams/createTeam">Create new Team</Link>
                </div>
                <div className="container">
                    {teams.map(team => (
                        <div className="list" style={{"backgroundColor":`${team.color}`}} key={team.id}>
                            <Link className="links" to={`/teams/${team.id}`}>{team.tName}</Link>
                            {/* {team.players.length >0 && <h5>{team.players.map(p => p.name)}</h5>} */}
                        </div>
                    ))}
                </div>
        </>
        )
    }
    return(
        <div>
                <div className="Create">
                    <Link className="links" to="/players/createPlayer">Create new player</Link>
                </div>
                <div className="container">
                    {players.map(player => (
                        <div className="list" style={{"backgroundColor":"gray"}} key={player.id}>
                            <Link className="links" to={`/players/${player.id}`}>{player.name}</Link>
                        </div>
                    ))}
                </div>
        </div>
    )
}

export default View;