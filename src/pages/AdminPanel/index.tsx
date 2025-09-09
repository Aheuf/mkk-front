import { useEffect, useMemo, useState } from "react";
import type { Player } from "../../models/Player";
import { PlayerService } from "../../services/PlayerService";
import { ROLE, Toast, WEB_SOCKET_URL } from "../../constant";
import LogoutButton from "../../components/LogoutButton";
import { useNavigate } from "react-router";
import PlayersTable from "../../components/PlayersTable";
import Swal from "sweetalert2";

interface AdminPanelProps {
  playerService: PlayerService
}

export default function AdminPanel({ playerService }: AdminPanelProps) {
  const navigate = useNavigate();
  const [playersList, setPlayerList] = useState<Player[]>([]);
  const [isrequestQueued, setIsRequestQueued] = useState<boolean>(false);
  const websocket = useMemo(() => new WebSocket(WEB_SOCKET_URL), []);

  useEffect(() => {
    playerService.getPlayers().then(setPlayerList);
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

  const handleOnClickPlayerHp = async (player: Player, newPv: number) => {
    const updatedPlayer = { ...player, pv: Math.max(0, Math.min(3, newPv)) };
    await playerService.updatePlayer(updatedPlayer);
    setPlayerList(await playerService.getPlayers());
  };

  const handleOnClickPlayerDelete = async (player: Player) => {
    Swal.fire({
      title: "Est-ce votre ultime bafouille ?",
      text: `Veux-tu supprimer le joueur "${player.username}" ?`,
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Supprimer",
      denyButtonText: "Annuler",
      reverseButtons: true
    }).then(async (result) => {
      if (result.isConfirmed) {
        await playerService.deletePlayer(player);
        setPlayerList(await playerService.getPlayers());
      }
    });
  };

  const handleLogout = async () => {
    await playerService.logout();
    Toast.fire({ icon: "success", title: "Déconnecté", width: "22em" });
    navigate("/");
  }

  return (<>
    <LogoutButton className="absolute top-4 right-4" handleLogout={handleLogout} />
    <div className="grid grid-cols-1 justify-items-center items-center text-white p-5">
      <h1 className="text-5xl text-center my-10">Mario Kart Kup 2025</h1>
      <PlayersTable
        players={playersList.filter(player => player.role === ROLE.PLAYER).sort((a: Player, b: Player) => b.pv - a.pv)}
        onClickPlayerHp={handleOnClickPlayerHp}
        onClickPlayerDelete={handleOnClickPlayerDelete} />
    </div>
  </>
  )
}
