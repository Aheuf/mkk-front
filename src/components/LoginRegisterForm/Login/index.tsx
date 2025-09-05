
export default function Login() {
  return (
    <div>
        <label htmlFor="nom" className="block text-gray-800 font-semibold text-sm">Nom</label>
        <input type="text" name="nom" id="nom" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

        <label htmlFor="prenom" className="block text-gray-800 font-semibold text-sm">Prénom</label>
        <input type="text" name="prenom" id="prenom" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required/>

        <label htmlFor="mdp" className="block text-gray-800 font-semibold text-sm">Mot de passe</label>
        <input type="password" name="mdp" id="mdp" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-3 bg-white" required/>
    </div>
  )
}
