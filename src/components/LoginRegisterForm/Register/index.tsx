import { useState } from "react";

interface RegisterProps {
  isPlayersFull: boolean;
}

export default function Register({ isPlayersFull }: RegisterProps) {
  const [motDePasse, setMotDePasse] = useState<string>("");
  const [motDePasseConfirme, setMotDePasseConfirme] = useState<string>("");
  const [erreurMdp, setErreurMdp] = useState<string>("");

  return isPlayersFull ?
    <p>liste des joueurs complet ! revenez l'année prochaine</p>
    :
    <div>
      <label htmlFor="nom" className="block text-gray-800 font-semibold text-sm">Nom</label>
      <input type="text" name="nom" id="nom" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

      <label htmlFor="prenom" className="block text-gray-800 font-semibold text-sm">Prénom</label>
      <input type="text" name="prenom" id="prenom" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

      <label htmlFor="mdp" className="block text-gray-800 font-semibold text-sm">Mot de passe</label>
      <input type="password"
        name="mdp"
        id="mdp"
        className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-3 bg-white"
        value={motDePasse}
        onChange={e => {
          setMotDePasse(e.target.value);
          if (motDePasseConfirme && e.target.value !== motDePasseConfirme) {
            setErreurMdp("Les mots de passe ne correspondent pas");
          } else {
            setErreurMdp("");
          }
        }}
        required
      />

      <input type="password"
        name="mdpValidation"
        id="mdpValidation"
        className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 bg-white"
        value={motDePasseConfirme}
        onChange={e => {
          setMotDePasseConfirme(e.target.value);
          if (motDePasse !== e.target.value) {
            setErreurMdp("Les mots de passe ne correspondent pas");
          } else {
            setErreurMdp("");
          }
        }}
      />
      <label className="pt-1 block text-gray-500 text-sm">valider le mot de passe</label>
      {erreurMdp && <p className="text-red-500 text-sm mt-1">{erreurMdp}</p>}
  </div>
}
