
export enum PLAYER_BUTTON_VARIANT {
    PLUS = "+",
    MINUS = "-"
}

interface PlayerButtonProps {
    variant: PLAYER_BUTTON_VARIANT;
}

export default function PlayerButton({variant}:PlayerButtonProps) {
  const buttonStyle = variant === PLAYER_BUTTON_VARIANT.PLUS ? "text-green-500 bg-green-100 active:bg-green-300 active:text-white" : "text-red-500 bg-red-100 active:bg-red-300 active:text-white";
  return (
    <button className={`text-8xl rounded-full ${buttonStyle} active:scale-95 border size-30`}>
        {variant}
    </button>
  )
}
