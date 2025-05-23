import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import type { Player } from "../../models/Player";
import { PlayerService } from "../../services/PlayerService";
import heartFull from "../../assets/images/heartFull.png";
import heartEmpty from "../../assets/images/heartEmpty.png";

export default function AdminPanel() {
  const playerService = new PlayerService();
  let players: Player[] = useLocation().state?.filter( (player:Player) => player.role === "PLAYER") || [];
  players = players.sort((a,b) => b.pv - a.pv)
  const navigate = useNavigate();

  useEffect(() => {
    if(!players.length){
      console.info("no admin connected");
      navigate(-1);
    }
  }, [players.length, navigate]);

  const handleRefresh= async () => {
    players = (await playerService.getPlayers()).sort((a,b) => b.pv - a.pv);
  };

  return (
    <div className="grid grid-cols-1 justify-items-center items-center text-white p-5">
      <h1 className="text-5xl">Mario Kart Kup 2025</h1><button onClick={handleRefresh}>R</button>
      <table className="table-auto bg-white/50 marioFont text-3xl w-2/3 rounded">
        <thead>
          <tr>
            <th>joueur</th>
            <th>vie</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {players.map(player =>
            <tr className={`border-2 border-black ${ player.pv === 0 && "text-slate-500 bg-slate-500"}`}>
              <td>{`${player.prenom} ${player.nom.charAt(0)}.`}</td>
              <td className={"flex justify-center"}>
                {Array.from(Array(player.pv), () => <img src={heartFull} className="size-14"/>)}
                {Array.from(Array(3 - player.pv), () => <img src={heartEmpty} className="size-14"/>)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
