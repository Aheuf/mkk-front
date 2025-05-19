import { Route, Routes, useNavigate } from 'react-router';
import './app.css'
import Login from './pages/Login/index.tsx';
import PlayerPanel from './pages/PlayerPanel/index.tsx';
import AdminPanel from './pages/AdminPanel/index.tsx';
import { PlayerService } from './services/PlayerService.ts';

export default function App() {
  const playerService = new PlayerService();
  const navigate = useNavigate();

  const connectPlayer = (prenom:string, nom:string) => {
    playerService.getPlayer(prenom, nom).then(player => {
      if(player.role === "PLAYER"){
        navigate("/player", {state: player});
      } else {
        playerService.getPlayers(player).then(players => {
          navigate("/admin", {state: players});
        });
      }
    });
  }

  return (
    <Routes>
      <Route path='/' element={<Login connectPlayer={connectPlayer}/>}/>
      <Route path='/player' element={<PlayerPanel/>}/>
      <Route path='/admin' element={<AdminPanel/>}/>
    </Routes>
  )
}
