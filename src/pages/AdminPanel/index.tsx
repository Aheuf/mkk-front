import { useEffect, useMemo, useState } from "react";
import type { Player } from "../../models/Player";
import { PlayerServiceImpl } from "../../services/PlayerService/PlayerServiceImpl";
import { ROLE, Toast } from "../../constant";
import LogoutButton from "../../components/LogoutButton";
import { useNavigate } from "react-router";
import PlayersTable from "../../components/PlayersTable";
import Swal from "sweetalert2";
import { handle401And403Errors } from "../utils";
import { ServerSentEventType, type ServerSentEventPayload } from "../../models/ServerSentEvent";

interface AdminPanelProps {
  playerService: PlayerServiceImpl;
}

export default function AdminPanel({ playerService }: AdminPanelProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [playersList, setPlayersList] = useState<Map<string, Player>>(new Map());
  const serverSentEvents = useMemo(playerService.getPlayersEventSource, []);

  useEffect(() => {
    playerService.getPlayers()
      .then(players => setPlayersList(new Map(players.map(p => [p.username, p]))))
      .then(() => setIsLoading(false))
      .catch(e => handle401And403Errors(e, navigate));
  }, []);

  serverSentEvents.onmessage = (messageEvent: MessageEvent) => {
    const data: ServerSentEventPayload = JSON.parse(messageEvent.data);
    let updatedPlayersList = new Map(playersList)

    switch (data.action) {
      case ServerSentEventType.DELETE:
        updatedPlayersList.delete(data.username);
        break;
      case ServerSentEventType.UPDATE:
        const player = updatedPlayersList.get(data.username);
        if (player) updatedPlayersList.set(data.username, { ...player, pv: data.pv })
        break;
      case ServerSentEventType.CREATE:
        updatedPlayersList.set(data.player.username, data.player);
        break;
    }
    setPlayersList(updatedPlayersList);
  };

  const handleOnClickPlayerHp = (player: Player, newPv: number) => {
    const updatedPlayer = { ...player, pv: Math.max(0, Math.min(3, newPv)) };
    playerService.updatePlayer(updatedPlayer).catch(e => handle401And403Errors(e, navigate));

    const updatedPlayersList = new Map(playersList);
    updatedPlayersList.set(player.username, updatedPlayer);
    setPlayersList(updatedPlayersList);
  };

  const handleOnClickPlayerDelete = (player: Player) => {
    Swal.fire({
      title: "Est-ce votre ultime bafouille ?",
      text: `Veux-tu supprimer le joueur "${player.username}" ?`,
      icon: "warning",
      showDenyButton: true,
      confirmButtonText: "Supprimer",
      denyButtonText: "Annuler",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        await playerService.deletePlayer(player);
        const updatedPlayersList = new Map(playersList);
        playersList.delete(player.username);
        setPlayersList(updatedPlayersList);
      }
    }).catch(e => handle401And403Errors(e, navigate));
  };

  const handleLogout = async () => {
    await playerService.logout();
    Toast.fire({ icon: "success", title: "Déconnecté", width: "22em" });
    navigate("/");
  };

  return (
    <>
      <LogoutButton
        className="absolute top-4 right-4"
        handleLogout={handleLogout}
      />
      <div className="grid grid-cols-1 justify-items-center items-center text-white p-5">
        <h1 className="text-5xl text-center my-10">Mario Kart Kup 2025</h1>
        <PlayersTable
          isLoading={isLoading}
          players={[...playersList.values()]
            .filter(player => player.role === ROLE.PLAYER)
            .sort((a: Player, b: Player) => b.pv - a.pv)}
          onClickPlayerHp={handleOnClickPlayerHp}
          onClickPlayerDelete={handleOnClickPlayerDelete}
        />
      </div>
    </>
  );
}
