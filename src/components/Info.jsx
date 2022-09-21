import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const Info = () =>{
    
    const {currPage, id} = useParams();
    const players = useSelector(state => state.players);
    const teams = useSelector(state => state.teams);

    if(currPage === "players"){
        const player = players.find((player) => player.id === id)
        return(
            <div>
                {player.name}
                {player.team === "" ? <h5>Available</h5>:<h1>{player.team}</h1>}
            </div>
        )
    }
    const team = teams.find((team) => team.id === id)
    return(
        <>
            {team.name}
            {team.players}
        </>
    )
}

export default Info;