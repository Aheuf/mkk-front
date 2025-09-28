import { useEffect, useMemo, useState } from "react";
import type { Player } from "../../models/Player";
import { useLocation, useNavigate, } from "react-router";
import { PlayerServiceImpl } from "../../services/PlayerService/PlayerServiceImpl";
import { Toast } from "../../constant";
import LogoutButton from "../../components/LogoutButton";
import PlayerButton, { PLAYER_BUTTON_SIZE, PLAYER_BUTTON_VARIANT } from "../../components/PlayerButton";
import { handle401And403Errors, handleRateLimiter } from "../utils";
import { ServerSentEventType, type ServerSentEventPayload } from "../../models/ServerSentEvent";

interface PlayerPanelProps {
  playerService: PlayerServiceImpl
}

export default function PlayerPanel({ playerService }: PlayerPanelProps) {
  const navigate = useNavigate();
  const [player, setPlayer] = useState<Player | null>(useLocation().state);
  const serverSentEvents = useMemo(playerService.getPlayersEventSource, []);

  useEffect(() => {
    serverSentEvents.onmessage = (message: MessageEvent) => {
      const data: ServerSentEventPayload = JSON.parse(message.data);
      if (!player) return;

      switch (data.action) {
        case ServerSentEventType.DELETE:
          Toast.fire("Votre compte a été supprimé", "", "warning");
          navigate("/");
          break;
        case ServerSentEventType.UPDATE:
          setPlayer({...player, pv: data.pv});
          break;
      }
    }
  }, [player]);

  useEffect(() => {
    if (!player) {
      playerService.getMyPlayer().then(setPlayer).catch(e => handleRateLimiter(e)).catch(e => handle401And403Errors(e, navigate));
    }
  }, []);

  const handleClick = (operator: PLAYER_BUTTON_VARIANT) => {
    if (player) {
      const updatedPlayer = { ...player };

      if (operator === PLAYER_BUTTON_VARIANT.PLUS && updatedPlayer.pv < 3) {
        updatedPlayer.pv += 1;
      } else if (operator === PLAYER_BUTTON_VARIANT.MINUS && updatedPlayer.pv > 0) {
        updatedPlayer.pv -= 1;
      }

      playerService.updatePlayer(updatedPlayer).catch(e => handleRateLimiter(e)).catch(e => handle401And403Errors(e, navigate));
      setPlayer(updatedPlayer);
    }
  }

  const handleLogout = async () => {
    await playerService.logout();
    Toast.fire({icon: "success", title: "Déconnecté", width: "22em"});
    navigate("/");
  }

  const getLifeColor = () => {
    switch (player?.pv) {
      case 3: return "text-green-500";
      case 2: return "text-orange-500";
      case 1: return "text-red-500";
      default: return "text-slate-500";
    }
  }

  return (
  <div className="grid grid-cols-1 grid-rows-12 p-5 h-full">
    <div className="row-span-1 justify-self-end self-start">
      <LogoutButton handleLogout={handleLogout} />
    </div>
    <div className="flex flex-col justify-between row-span-11 mario-font text-white bg-white/50 py-5 px-2">
      <h1 className="text-5xl text-center">{player?.username}</h1>
      <p className={`flex items-center justify-center text-8xl ${getLifeColor()}`}>{player?.pv}</p>
      <div className="flex justify-center gap-10 row-span-2 items-end">
        <PlayerButton onClick={handleClick} variant={PLAYER_BUTTON_VARIANT.MINUS} size={PLAYER_BUTTON_SIZE.XL}/>
        <PlayerButton onClick={handleClick} variant={PLAYER_BUTTON_VARIANT.PLUS} size={PLAYER_BUTTON_SIZE.XL}/>
      </div>
    </div>
  </div>
  )
}
