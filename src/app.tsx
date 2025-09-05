import { Route, Routes, useNavigate } from 'react-router';
import './app.css'
import Login from './pages/Login/index.tsx';
import PlayerPanel from './pages/PlayerPanel/index.tsx';
import AdminPanel from './pages/AdminPanel/index.tsx';
import { PlayerService } from './services/PlayerService.ts';

import { useEffect, useState } from 'react';
import { ROLE } from './constant.ts';
import type { Player } from './models/Player.ts';

export default function App() {
  const playerService = new PlayerService();
  const [isPlayersFull, setIsPlayersFull] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    playerService.getPlayerCount().then(count => setIsPlayersFull(count >= 12));
  });

  const connectPlayer = (prenom:string, nom:string, mdp:string) => {
    playerService.getPlayer(prenom, nom, mdp).then(player => {
      if(player.role === ROLE.PLAYER) {
        navigate("/player", {state: player});
      } else {
        playerService.getPlayers(player.role || ROLE.UNKNOWN).then(players => {
          navigate("/admin", {state: players});
        });
      }
    });
  }

  const registerPlayer = async (prenom:string, nom:string, mdp:string) => {
    const player: Player = {
      prenom,
      nom,
      password: mdp,
    }

    if (isPlayersFull) {
      alert("La liste des joueurs est complète. Veuillez réessayer l'année prochaine.");
    } else {
      const isPlayerRegistred = await playerService.createPlayer(player);

      if (isPlayerRegistred) {
        alert("Joueur enregistré avec succès !");
      } else {
        alert("Échec de l'enregistrement du joueur. Veuillez réessayer.");
      }
    }

  }

  return (
    <Routes>
      <Route path='/' element={<Login connectPlayer={connectPlayer} registerPlayer={registerPlayer} isPlayersFull={isPlayersFull}/>}/>
      <Route path='/player' element={<PlayerPanel/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
    </Routes>
  )
}
