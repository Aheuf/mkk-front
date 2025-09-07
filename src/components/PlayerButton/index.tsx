
export enum PLAYER_BUTTON_VARIANT {
  PLUS = "+",
  MINUS = "-"
}

export enum PLAYER_BUTTON_SIZE {
  XL = "xl",
  MD = "md",
  SM = "sm"
}

interface PlayerButtonProps {
  variant: PLAYER_BUTTON_VARIANT;
  size?: PLAYER_BUTTON_SIZE;
  className?: string;
  onClick(): void;
}

export default function PlayerButton({ variant, size, className, onClick }: PlayerButtonProps) {
  const buttonStyle =
    variant === PLAYER_BUTTON_VARIANT.PLUS
      ? "text-green-500 bg-green-100 active:bg-green-300 active:text-white"
      : "text-red-500 bg-red-100 active:bg-red-300 active:text-white";

  let buttonSizeStyle;
  switch (size) {
    case PLAYER_BUTTON_SIZE.SM:
      buttonSizeStyle = "text-5xl size-10 leading-1";
      break;
    case PLAYER_BUTTON_SIZE.MD:
      buttonSizeStyle = "text-7xl size-20";
      break;
    case PLAYER_BUTTON_SIZE.XL:
    default:
      buttonSizeStyle = "text-8xl size-30";
      break;
  }
  return (
    <button className={`transition-opacity duration-[300ms] player-button rounded-full ${buttonStyle} active:scale-95 border ${buttonSizeStyle} ${className}`} onClick={onClick}>
      <span className="mario-font inline-block transform-[translateX(0.06em)]">{variant}</span>
    </button>
  )
}
