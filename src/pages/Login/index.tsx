import { useState, type FormEvent } from "react";
import logo from "../../../public/assets/images/logo-mk8.png";

interface LoginProps {
  connectPlayer: (prenom:string, nom:string) => void;
}

export default function Login({connectPlayer}:LoginProps) {
  const [prenom, setPrenom] = useState<string>("");
  const [nom, setNom] = useState<string>("");

  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    connectPlayer(prenom, nom);
  };

  return (
    <div className={`grid lg:grid-cols-2 grid-cols-1 justify-items-center items-center h-full`}>
      <img src={logo} className="h-1/3"/>
        <form className={`grid grid-cols-1 rounded-xl bg-white/50 p-10 gap-4 lg:w-1/2 lg:h-1/2`} onSubmit={(event) => handleSubmit(event)}>
          <h1 className="text-3xl text-white text-center">connexion</h1>
          <input
            className="bg-white rounded-xl px-10 h-12"
            type="text"
            placeholder="ton prénom"
            onChange={e => setPrenom(e.target.value)}
            required />
          <input
            className="bg-white rounded-xl px-10 h-12"
            type="password"
            placeholder="ton nom"
            onChange={e => setNom(e.target.value)}
            required />
          <button className="bg-black text-white rounded-xl h-12 hover:bg-sky-700" type="submit">Se connecter</button>
        </form>
    </div>
  )
}
