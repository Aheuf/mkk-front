interface LogoutButtonProps {
    handleLogout(): void;
    className?: string;
}

export default function LogoutButton({ handleLogout, className }: LogoutButtonProps) {
    var css = ["text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600"];
    if (className) css.push(className);

    return (
        <button
            className={css.join(" ")}
            onClick={handleLogout}
        >
            Déconnexion <span className="material-symbols text-xl align-text-bottom">logout</span>
        </button>
    )
}