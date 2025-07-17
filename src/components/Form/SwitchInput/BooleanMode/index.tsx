import { useState } from "react";
import { SWITCH_VARIANT } from "../Switch.constants";

interface BooleanModeProps {
  defaultValue?: boolean;
  onChange: (value: boolean) => void;
  variant?: SWITCH_VARIANT;
  required?: boolean;
  icons?:string[];
}

const variantClassMap: Record<SWITCH_VARIANT, string> = {
  [SWITCH_VARIANT.RED]: "peer-checked:bg-red-100 bg-white peer-checked:ring-red-300 ring-red-100",
  [SWITCH_VARIANT.ORANGE]: "peer-checked:bg-orange-100 bg-white peer-checked:ring-orange-300 ring-orange-100",
  [SWITCH_VARIANT.AMBER]: "peer-checked:bg-amber-100 bg-white peer-checked:ring-amber-300 ring-amber-100",
  [SWITCH_VARIANT.YELLOW]: "peer-checked:bg-yellow-100 bg-white peer-checked:ring-yellow-300 ring-yellow-100",
  [SWITCH_VARIANT.LIME]: "peer-checked:bg-lime-100 bg-white peer-checked:ring-lime-300 ring-lime-100",
  [SWITCH_VARIANT.GREEN]: "peer-checked:bg-green-100 bg-white peer-checked:ring-green-300 ring-green-100",
  [SWITCH_VARIANT.EMERALD]:"peer-checked:bg-emerald-100 bg-white peer-checked:ring-emerald-300 ring-emerald-100",
  [SWITCH_VARIANT.TEAL]: "peer-checked:bg-teal-100 bg-white peer-checked:ring-teal-300 ring-teal-100",
  [SWITCH_VARIANT.CYAN]: "peer-checked:bg-cyan-100 bg-white peer-checked:ring-cyan-300 ring-cyan-100",
  [SWITCH_VARIANT.SKY]: "peer-checked:bg-sky-100 bg-white peer-checked:ring-sky-300 ring-sky-100",
  [SWITCH_VARIANT.BLUE]: "peer-checked:bg-blue-100 bg-white peer-checked:ring-blue-300 ring-blue-100",
  [SWITCH_VARIANT.INDIGO]: "peer-checked:bg-indigo-100 bg-white peer-checked:ring-indigo-300 ring-indigo-100",
  [SWITCH_VARIANT.VIOLET]: "peer-checked:bg-violet-100 bg-white peer-checked:ring-violet-300 ring-violet-100",
  [SWITCH_VARIANT.PURPLE]: "peer-checked:bg-purple-100 bg-white peer-checked:ring-purple-300 ring-purple-100",
  [SWITCH_VARIANT.FUSHSIA]:"peer-checked:bg-fuchsia-100 bg-white peer-checked:ring-fuchsia-300 ring-fuchsia-100",
  [SWITCH_VARIANT.PINK]: "peer-checked:bg-pink-100 bg-white peer-checked:ring-pink-300 ring-pink-100",
  [SWITCH_VARIANT.ROSE]: "peer-checked:bg-rose-100 bg-white peer-checked:ring-rose-300 ring-rose-100",
  [SWITCH_VARIANT.SLATE]: "peer-checked:bg-slate-100 bg-white peer-checked:ring-slate-300 ring-slate-100",
  [SWITCH_VARIANT.GRAY]: "peer-checked:bg-gray-100 bg-white peer-checked:ring-gray-300 ring-gray-100",
  [SWITCH_VARIANT.ZINC]: "peer-checked:bg-zinc-100 bg-white peer-checked:ring-zinc-300 ring-zinc-100",
  [SWITCH_VARIANT.NEUTRAL]:"peer-checked:bg-neutral-100 bg-white peer-checked:ring-neutral-300 ring-neutral-100",
  [SWITCH_VARIANT.STONE]: "peer-checked:bg-stone-100 bg-white peer-checked:ring-stone-300 ring-stone-100"
};

const circleVariantClassMap: Record<SWITCH_VARIANT, string> = {
  [SWITCH_VARIANT.RED]: "bg-red-300 peer-checked:bg-red-600",
  [SWITCH_VARIANT.ORANGE]: "bg-orange-300 peer-checked:bg-orange-600",
  [SWITCH_VARIANT.AMBER]: "bg-amber-300 peer-checked:bg-amber-600",
  [SWITCH_VARIANT.YELLOW]: "bg-yellow-300 peer-checked:bg-yellow-600",
  [SWITCH_VARIANT.LIME]: "bg-lime-300 peer-checked:bg-lime-600",
  [SWITCH_VARIANT.GREEN]: "bg-green-300 peer-checked:bg-green-600",
  [SWITCH_VARIANT.EMERALD]: "bg-emerald-300 peer-checked:bg-emerald-600",
  [SWITCH_VARIANT.TEAL]: "bg-teal-300 peer-checked:bg-teal-600",
  [SWITCH_VARIANT.CYAN]: "bg-cyan-300 peer-checked:bg-cyan-600",
  [SWITCH_VARIANT.SKY]: "bg-sky-300 peer-checked:bg-sky-600",
  [SWITCH_VARIANT.BLUE]: "bg-blue-300 peer-checked:bg-blue-600",
  [SWITCH_VARIANT.INDIGO]: "bg-indigo-300 peer-checked:bg-indigo-600",
  [SWITCH_VARIANT.VIOLET]: "bg-violet-300 peer-checked:bg-violet-600",
  [SWITCH_VARIANT.PURPLE]: "bg-purple-300 peer-checked:bg-purple-600",
  [SWITCH_VARIANT.FUSHSIA]: "bg-fuchsia-300 peer-checked:bg-fuchsia-600",
  [SWITCH_VARIANT.PINK]: "bg-pink-300 peer-checked:bg-pink-600",
  [SWITCH_VARIANT.ROSE]: "bg-rose-300 peer-checked:bg-rose-600",
  [SWITCH_VARIANT.SLATE]: "bg-slate-300 peer-checked:bg-slate-600",
  [SWITCH_VARIANT.GRAY]: "bg-gray-300 peer-checked:bg-gray-600",
  [SWITCH_VARIANT.ZINC]: "bg-zinc-300 peer-checked:bg-zinc-600",
  [SWITCH_VARIANT.NEUTRAL]: "bg-neutral-300 peer-checked:bg-neutral-600",
  [SWITCH_VARIANT.STONE]: "bg-stone-300 peer-checked:bg-stone-600",
};

export default function BooleanMode({defaultValue, onChange, variant=SWITCH_VARIANT.SLATE, required, icons}: BooleanModeProps) {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue || false);
  const colorScheme = variantClassMap[variant];
  const circleColor = circleVariantClassMap[variant];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.checked);
    setIsChecked(e.target.checked);
  }

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        id="SwitchInput"
        type="checkbox"
        className="sr-only peer"
        onChange={handleChange}
        defaultChecked={defaultValue}
        required={required}
      />
      <div className={`rounded-full duration-300 w-16 h-8 ring-2 ${colorScheme}`}>
        <span className={`absolute top-1 left-1 h-6 w-6 rounded-full ${circleColor} flex text-center items-center justify-center transform transition-transform duration-300 bg-${variant}-${isChecked ? "600" : "300"} ${isChecked ? "translate-x-8" : "translate-x-0"}`}>
          {icons &&
            <span className={`${isChecked ? "text-white" : "text-black"} material-symbols-outlined`}>
              {isChecked ? icons[1]: icons[0]}
            </span>
          }
        </span>
      </div>
    </label>
  );
}
