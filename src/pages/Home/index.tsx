import { useEffect, useState } from "react";
import logo from "../../assets/images/logo-mk8.png";
import LoginRegisterForm from "../../components/LoginRegisterForm";
import type { PlayerService } from "../../services/PlayerService";
import { REGISTRATION_STATUS, ROLE, Toast } from "../../constant";
import type { LoginPlayerPayload, NewPlayerPayload } from "../../models/Player";
import { useNavigate } from "react-router";
import { AxiosError } from "axios";

interface HomeProps {
  playerService: PlayerService
}

export default function Home({playerService}: HomeProps) {
  const navigate = useNavigate();
  const [registrationStatus, setRegistrationStatus] = useState(REGISTRATION_STATUS.OPEN);

  useEffect(() => {
    playerService.getRegistrationStatus().then(setRegistrationStatus);
  }, [playerService]);

  const handleConnect = (payload: LoginPlayerPayload) => {
    playerService.login(payload).then(player => {
      navigate(player.role === ROLE.ADMIN ? "/admin" : "/player", {state: player});
    })
    .catch(e => {
      if (e instanceof AxiosError && e.response?.data) {
        Toast.fire({icon: "error", title: "Erreur", text: e.response.data});
      }
    });
  }

  const handleRegister = (payload: NewPlayerPayload): Promise<boolean> => {
    if (registrationStatus === REGISTRATION_STATUS.FULL) {
      Toast.fire({icon: "error", title: "Liste complète", html: "La liste des joueurs est complète.<br>Veuillez réessayer l'année prochaine."});
      return Promise.resolve(false);
    }

    return playerService.createPlayer(payload).then(role => {
      switch (role) {
        case ROLE.PLAYER:
          Toast.fire({icon: "success", title: "Joueur enregistré", width: "22em"});
          break;
        case ROLE.QUEUED:
          Toast.fire({icon: "info", title: "Liste complète", text: "Joueur enregistré pour l'année prochaine."});
          break;
        default:
          Toast.fire({icon: "error", title: "Échec de l'enregistrement du joueur", text: "Veuillez réessayer."});
          break;
      }
      return true;
    }).catch(e => {
      if (e instanceof AxiosError && e.response?.data) {
        Toast.fire({icon: "error", title: "Erreur", text: e.response.data});
      }
      return false;
    });
  }

  return (
    <div className={`grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center h-full`}>
      <img src={logo} className="h-1/3"/>
      <LoginRegisterForm connectPlayer={handleConnect} registerPlayer={handleRegister} registrationStatus={registrationStatus}/>
    </div>
  )
}
