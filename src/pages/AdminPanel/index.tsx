import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import type { Player } from "../../models/Player";
import { PlayerService } from "../../services/PlayerService";
import heartFull from "../../assets/images/heartFull.png";
import heartEmpty from "../../assets/images/heartEmpty.png";
import { WEB_SOCKET_URL } from "../../constant";

export default function AdminPanel() {
  const [playersList, setPlayerList] = useState<Player[]>([]);
  const players = useLocation().state;
  const [isrequestQueued, setIsRequestQueued] = useState<boolean>(false);
  const navigate = useNavigate();
  const playerService = useMemo(() => new PlayerService(), []);


  useEffect(() => {
    setPlayerList(players.filter( (player:Player) => player.role === "PLAYER").sort((a: Player,b: Player) => b.pv - a.pv) || []);
  }, [playersList.length, navigate, players]);

  useEffect(() => {
    const socket = new WebSocket(WEB_SOCKET_URL);

    socket.onmessage = () => {
      try {
        console.info("demande de mise à jour reçu");
        if(!isrequestQueued){
          setTimeout(() => {
              playerService.getPlayers().then(p => {
                setPlayerList(p.filter( (player:Player) => player.role === "PLAYER").sort((a: Player,b: Player) => b.pv - a.pv))
              });
            setIsRequestQueued(false);
          }, 5000)
        }
      } catch (err) {
        console.error("Message WebSocket invalide :", err);
      }
    };
  }, [])

  return (
    <div className="grid grid-cols-1 justify-items-center items-center text-white p-5">
      <h1 className="text-5xl">Mario Kart Kup 2025</h1>
      <table className="table-auto bg-white/50 marioFont text-3xl w-2/3 rounded">
        <thead>
          <tr>
            <th>joueur</th>
            <th>vie</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {playersList.map((player, index) =>
            <tr key={index} className={`border-2 border-black ${ player.pv === 0 && "text-slate-500 bg-slate-500"}`}>
              <td>{`${player.prenom} ${player.nom.charAt(0)}.`}</td>
              <td className={"flex justify-center"}>
                {Array.from(Array(player.pv), () => <img src={heartFull} key={`${player.nom}-heartFull-${Math.random() * 1000}`} className="size-14"/>)}
                {Array.from(Array(3 - player.pv), () => <img src={heartEmpty} key={`${player.nom}-heartEmpty-${Math.random() * 1000}`} className="size-14"/>)}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
