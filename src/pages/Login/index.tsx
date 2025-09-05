import logo from "../../../public/assets/images/logo-mk8.png";
import LoginRegisterForm from "../../components/LoginRegisterForm";

interface LoginProps {
  connectPlayer: (prenom:string, nom:string, mdp:string) => void;
  registerPlayer: (prenom:string, nom:string, mdp:string) => void;
  isPlayersFull:boolean;
}

export default function Login({connectPlayer,registerPlayer, isPlayersFull}:LoginProps) {

  return (
    <div className={`grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center h-full`}>
      <img src={logo} className="h-1/3"/>
      <LoginRegisterForm connectPlayer={connectPlayer} registerPlayer={registerPlayer} isPlayersFull={isPlayersFull}/>
    </div>
  )
}
