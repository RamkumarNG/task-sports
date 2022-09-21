import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const View = () =>{
    const players = useSelector(state => state.players)
    const teams = useSelector(state => state.teams)

    const {currPage} = useParams();
    
    if(currPage === "players"){
        return(
            <>
                <Link to="/players/createPlayer">Create new player</Link>
                {players.map(player => (
                    <>
                        <Link to={`/players/${player.id}`}>{player.name}</Link>
                    </>
                ))}
            </>
        )
    }
    return(
        <>
            <Link to="/teams/createTeam">Create new Team</Link>
            {teams.map(team => (
            <>
                <Link to={`/teams/${team.id}`}>{team.name}</Link>
            </>
          ))}
        </>
    )
}

export default View;