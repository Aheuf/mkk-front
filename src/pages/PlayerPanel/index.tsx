import { useEffect, useState } from "react";
import type { Player } from "../../models/Player";
import { useLocation, useNavigate } from "react-router";
import { PlayerService } from "../../services/PlayerService";

export default function PlayerPanel() {
  const connectedPlayer = useLocation().state;
  const [player, setPlayer] = useState<Player | undefined>(connectedPlayer);
  const [textColor, setTextColor] = useState<string>("green");
  const navigate = useNavigate();
  const service = new PlayerService();


  useEffect(() => {
    if(!connectedPlayer){
      console.info("no player connected");
      navigate(-1);
    }
  }, [connectedPlayer, navigate]);


  const handleClick = (operator:string) => {
    if(player){
      const updatedPlayer = player;

      if(operator === "+" && updatedPlayer.pv < 3){
        updatedPlayer.pv += 1;
      } else if(operator === "-" && updatedPlayer.pv > 0) {
        updatedPlayer.pv -= 1;
      }
      service.updatePlayer(updatedPlayer);
      setPlayer(updatedPlayer);

      switch(player?.pv){
        case 3: setTextColor("green"); break;
        case 2: setTextColor("orange"); break;
        case 1: setTextColor("red"); break;
        default: setTextColor("slate"); break;
      }
    }
  }

  return (
    <div className="grid grid-cols-1 justify-items-center items-center h-full marioFont text-white bg-white/50">
      <h1 className="text-5xl">{player?.prenom}</h1>
      <p className={`text-8xl text-${textColor}-500`}>{player?.pv}</p>
      <div className="h-full w-full">
        <button className="text-8xl text-red-500 bg-white h-full w-1/2 active:scale-95 border" onClick={() => handleClick("-")}>-</button>
        <button className="text-8xl text-green-500 bg-white h-full w-1/2 active:scale-95 border" onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  )
}
