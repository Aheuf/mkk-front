import { Route, Routes } from 'react-router';
import './app.css'
import Home from './pages/Home/index.tsx';
import PlayerPanel from './pages/PlayerPanel/index.tsx';
import AdminPanel from './pages/AdminPanel/index.tsx';
import { PlayerService } from './services/PlayerService.ts';

const playerService = new PlayerService();

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home playerService={playerService}/>}/>
      <Route path='/player' element={<PlayerPanel playerService={playerService}/>}/>
      <Route path='/admin' element={<AdminPanel playerService={playerService}/>}/>
    </Routes>
  )
}
