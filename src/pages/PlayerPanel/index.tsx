import { useEffect, useMemo, useState } from "react";
import type { Player } from "../../models/Player";
import { useLocation, useNavigate, } from "react-router";
import { PlayerService } from "../../services/PlayerService";
import { Toast, WEB_SOCKET_URL } from "../../constant";
import LogoutButton from "../../components/LogoutButton";

interface PlayerPanelProps {
  playerService: PlayerService
}

export default function PlayerPanel({ playerService }: PlayerPanelProps) {
  const navigate = useNavigate();
  const [player, setPlayer] = useState<Player | null>(useLocation().state);
  const websocket = useMemo(() => new WebSocket(WEB_SOCKET_URL), []);

  useEffect(() => {
    if (!player) {
      playerService.getMyPlayer().then(setPlayer);
    }
  }, []);

  const handleClick = (operator: string) => {
    if (player) {
      const updatedPlayer = { ...player };

      if (operator === "+" && updatedPlayer.pv < 3) {
        updatedPlayer.pv += 1;
      } else if (operator === "-" && updatedPlayer.pv > 0) {
        updatedPlayer.pv -= 1;
      }

      playerService.updatePlayer(updatedPlayer);
      setPlayer(updatedPlayer);
      websocket.send("");
    }
  }

  const handleLogout = async () => {
    await playerService.logout();
    Toast.fire({icon: "success", title: "Déconnecté", width: "22em"});
    navigate("/");
  }

  const getHeartColor = () => {
    switch (player?.pv) {
      case 3: return "green";
      case 2: return "orange";
      case 1: return "red";
      default: return "slate";
    }
  }

  return (<>
    <LogoutButton className="absolute top-4 right-4" handleLogout={handleLogout} />
    <div className="grid grid-cols-1 justify-items-center items-center h-full mario-font text-white bg-white/50">
      <h1 className="text-5xl">{player?.prenom}</h1>
      <p className={`text-8xl text-${getHeartColor()}-500`}>{player?.pv}</p>
      <div className="h-full w-full">
        <button className="text-8xl text-red-500 bg-white h-full w-1/2 active:scale-95 border" onClick={() => handleClick("-")}>-</button>
        <button className="text-8xl text-green-500 bg-white h-full w-1/2 active:scale-95 border" onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  </>
  )
}
