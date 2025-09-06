import { useState } from "react";
import { REGISTRATION_STATUS } from "../../../constant";
import type { NewPlayerPayload } from "../../../models/Player";

interface RegisterFormProps {
  registrationStatus: REGISTRATION_STATUS;
  onSubmit(payload: NewPlayerPayload): void;
}

export default function RegisterForm({ registrationStatus, onSubmit }: RegisterFormProps) {
  const [motDePasse, setMotDePasse] = useState<string>("");
  const [motDePasseConfirme, setMotDePasseConfirme] = useState<string>("");
  const [erreurMdp, setErreurMdp] = useState<string>("");

  const validate = (mdp: string, mdpConfirme: string) => {
    if (mdpConfirme && mdp !== mdpConfirme) {
      setErreurMdp("Les mots de passe ne correspondent pas");
    } else {
      setErreurMdp("");
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (erreurMdp) return;

      const formData = new FormData(e.currentTarget);
      const nom = formData.get("nom") as string;
      const prenom = formData.get("prenom") as string;
      const username = formData.get("username") as string;
      const password = formData.get("mdp") as string;

      onSubmit({nom, prenom, username, password});
  };

  return registrationStatus === REGISTRATION_STATUS.FULL ?
    <p>liste des joueurs complet ! revenez l'année prochaine</p>
    :
    <form onSubmit={handleSubmit} className="justify-items-center w-full">
      <div>
        <label htmlFor="nom" className="block text-gray-800 font-semibold text-sm">Nom</label>
        <input type="text" name="nom" id="nom" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

        <label htmlFor="prenom" className="block text-gray-800 font-semibold text-sm">Prénom</label>
        <input type="text" name="prenom" id="prenom" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

        <label htmlFor="username" className="block text-gray-800 font-semibold text-sm">Nom d'utilisateur</label>
        <input type="text" name="username" id="username" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

        <label htmlFor="mdp" className="block text-gray-800 font-semibold text-sm">Mot de passe</label>
        <input type="password"
          name="mdp"
          id="mdp"
          className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-3 bg-white"
          value={motDePasse}
          aria-invalid={!!erreurMdp}
          onChange={e => {
            setMotDePasse(e.target.value);
            validate(e.target.value, motDePasseConfirme);
          }}
          required
        />

        <label htmlFor="mdpValidation" className="block text-gray-800 font-semibold text-sm">Confirmer le mot de passe</label>
        <input type="password"
          name="mdpValidation"
          id="mdpValidation"
          className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 bg-white mb-3"
          value={motDePasseConfirme}
          aria-invalid={!!erreurMdp}
          onChange={e => {
            setMotDePasseConfirme(e.target.value);
            validate(motDePasse, e.target.value);
          }}
        />
        {erreurMdp && <p className="text-red-500 text-sm mb-3 font-semibold">{erreurMdp}</p>}
      </div>

      <button className="bg-black text-white rounded-xl h-12 hover:bg-sky-700 w-100 block w-full" type="submit">
        S'inscrire
      </button>
  </form>
}
