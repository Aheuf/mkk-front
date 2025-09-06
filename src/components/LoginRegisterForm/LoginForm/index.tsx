import type { LoginPlayerPayload } from "../../../models/Player";

interface LoginFormProps {
  onSubmit(payload: LoginPlayerPayload): void;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const username = formData.get("username") as string;
      const password = formData.get("mdp") as string;

      onSubmit({username, password});
  };

  return (
    <form onSubmit={handleSubmit} className="justify-items-center w-full">
      <div>
        <label htmlFor="username" className="block text-gray-800 font-semibold text-sm">Nom d'utilisateur</label>
        <input type="text" name="username" id="username" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-5 bg-white" required />

        <label htmlFor="mdp" className="block text-gray-800 font-semibold text-sm">Mot de passe</label>
        <input type="password" name="mdp" id="mdp" className="block w-56 rounded-md py-1.5 px-2 ring-1 ring-inset ring-gray-400 focus:text-gray-800 mb-3 bg-white" required />
      </div>
      <button className="bg-black text-white rounded-xl h-12 hover:bg-sky-700 block w-full" type="submit">
        Se connecter
      </button>
    </form>
  )
}
