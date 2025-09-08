interface DeleteButtonProps {
    onClick(): void;
    className?: string;
}

export default function DeleteButton({ onClick, className }: DeleteButtonProps) {
    return (
        <button
            className={`delete-button text-white bg-red-500 py-[2px] rounded hover:bg-red-600 transition-opacity duration-[300ms] text-base ${className ?? ""}`}
            onClick={onClick}
        >
            <span className="material-symbols text-4xl align-middle">delete</span>
        </button>
    )
}