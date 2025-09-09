import { useEffect, useMemo, useState } from "react";
import type { Player } from "../../models/Player";
import { PlayerService } from "../../services/PlayerService";
import heartFull from "../../../public/assets/images/heartFull.png";
import heartEmpty from "../../../public/assets/images/heartEmpty.png";
import { ROLE, Toast, WEB_SOCKET_URL } from "../../constant";
import LogoutButton from "../../components/LogoutButton";
import { useNavigate } from "react-router";

interface AdminPanelProps {
  playerService: PlayerService
}

export default function AdminPanel({ playerService }: AdminPanelProps) {
  const navigate = useNavigate();
  const [playersList, setPlayerList] = useState<Player[]>([]);
  const [isrequestQueued, setIsRequestQueued] = useState<boolean>(false);
  const websocket = useMemo(() => new WebSocket(WEB_SOCKET_URL), []);

  useEffect(() => {
    playerService.getPlayers().then(players => {
      setPlayerList(players.filter(player => player.role === ROLE.PLAYER).sort((a: Player, b: Player) => b.pv - a.pv));
    });
  }, []);

  websocket.onmessage = () => {
    try {
      console.info("demande de mise à jour reçu");
      if (!isrequestQueued) {
        setTimeout(() => {
          playerService.getPlayers().then(p => {
            setPlayerList(p.filter((player: Player) => player.role === "PLAYER").sort((a: Player, b: Player) => b.pv - a.pv))
          });
          setIsRequestQueued(false);
        }, 5000)
      }
    } catch (err) {
      console.error("Message WebSocket invalide :", err);
    }
  };

  const handleLogout = async () => {
    await playerService.logout();
    Toast.fire({icon: "success", title: "Déconnecté", width: "22em"});
    navigate("/");
  }

  return (<>
    <LogoutButton className="absolute top-4 right-4" handleLogout={handleLogout} />
    <div className="grid grid-cols-1 justify-items-center items-center text-white p-5">
      <h1 className="text-5xl text-center my-10">Mario Kart Kup 2025</h1>
      <table className="table-auto bg-white/50 marioFont text-3xl w-2/3 rounded">
        <thead>
          <tr>
            <th>joueur</th>
            <th>vie</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {playersList.map(player =>
            <tr key={player.username} className={`border-2 border-black${player.pv === 0 && " text-slate-500 bg-slate-500"}`}>
              <td>{`${player.prenom} ${player.nom.charAt(0)}.`}</td>
              <td className={"flex justify-center"}>
                {[1, 2, 3].map(pv => (
                  <img
                    src={pv <= player.pv ? heartFull : heartEmpty}
                    key={`${player.username}-${pv}`}
                    className="size-14" />
                ))}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </>
  )
}
