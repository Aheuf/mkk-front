import { useState } from "react";
import SwitchInput from "../Form/SwitchInput";
import { SWITCH_MODE } from "../Form/SwitchInput/Switch.constants";
import Login from "./Login";
import Register from "./Register";

interface LoginRegisterFormProps {
  connectPlayer: (prenom:string, nom:string, password:string) => void;
  registerPlayer: (prenom:string, nom:string, password:string) => void;
  isPlayersFull:boolean;
}

export default function LoginRegisterForm({ connectPlayer, registerPlayer, isPlayersFull }: LoginRegisterFormProps) {
    const [isConnection, setIsConnection] = useState<boolean>(true);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const prenom = formData.get("prenom") as string;
        const nom = formData.get("nom") as string;
        const motDePasse = formData.get("mdp") as string;

        if (isConnection) {
            connectPlayer(prenom, nom, motDePasse);
        } else {
            registerPlayer(prenom, nom, motDePasse);
        }
    }

    return (
        <form className={`grid grid-cols-1 rounded-xl bg-white/50 p-10 gap-4 lg:w-1/2 lg:h-1/2 justify-items-center`} onSubmit={handleSubmit}>
            <SwitchInput onChange={switchMode => setIsConnection(switchMode as string === "connexion")}
                mode={SWITCH_MODE.BINARY_CHOICE}
                options={["connexion","inscription"]} icons={["account_circle","person_edit"]}/>
            {isConnection ? <Login/> : <Register isPlayersFull={isPlayersFull}/>}
            <button className="bg-black text-white rounded-xl h-12 hover:bg-sky-700 w-100" type="submit">
                {isConnection ? "se connecter" : "s'inscrire"}
            </button>
        </form>
    )
}
