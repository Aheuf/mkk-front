import { SWITCH_VARIANT } from "../Switch.constants";

interface BooleanModeProps {
  defaultValue?: boolean;
  onChange: (value: boolean) => void;
  variant?: SWITCH_VARIANT;
  required?: boolean;
}

const variantClassMap: Record<SWITCH_VARIANT, string> = {
  [SWITCH_VARIANT.RED]: "peer-checked:bg-red-100 bg-white peer-checked:ring-red-300 ring-red-100 after:bg-red-300 peer-checked:after:bg-red-600",
  [SWITCH_VARIANT.ORANGE]: "peer-checked:bg-orange-100 bg-white peer-checked:ring-orange-300 ring-orange-100 after:bg-orange-300 peer-checked:after:bg-orange-600",
  [SWITCH_VARIANT.AMBER]: "peer-checked:bg-amber-100 bg-white peer-checked:ring-amber-300 ring-amber-100 after:bg-amber-300 peer-checked:after:bg-amber-600",
  [SWITCH_VARIANT.YELLOW]: "peer-checked:bg-yellow-100 bg-white peer-checked:ring-yellow-300 ring-yellow-100 after:bg-yellow-300 peer-checked:after:bg-yellow-600",
  [SWITCH_VARIANT.LIME]: "peer-checked:bg-lime-100 bg-white peer-checked:ring-lime-300 ring-lime-100 after:bg-lime-300 peer-checked:after:bg-lime-600",
  [SWITCH_VARIANT.GREEN]: "peer-checked:bg-green-100 bg-white peer-checked:ring-green-300 ring-green-100 after:bg-green-300 peer-checked:after:bg-green-600",
  [SWITCH_VARIANT.EMERALD]:"peer-checked:bg-emerald-100 bg-white peer-checked:ring-emerald-300 ring-emerald-100 after:bg-emerald-300 peer-checked:after:bg-emerald-600",
  [SWITCH_VARIANT.TEAL]: "peer-checked:bg-teal-100 bg-white peer-checked:ring-teal-300 ring-teal-100 after:bg-teal-300 peer-checked:after:bg-teal-600",
  [SWITCH_VARIANT.CYAN]: "peer-checked:bg-cyan-100 bg-white peer-checked:ring-cyan-300 ring-cyan-100 after:bg-cyan-300 peer-checked:after:bg-cyan-600",
  [SWITCH_VARIANT.SKY]: "peer-checked:bg-sky-100 bg-white peer-checked:ring-sky-300 ring-sky-100 after:bg-sky-300 peer-checked:after:bg-sky-600",
  [SWITCH_VARIANT.BLUE]: "peer-checked:bg-blue-100 bg-white peer-checked:ring-blue-300 ring-blue-100 after:bg-blue-300 peer-checked:after:bg-blue-600",
  [SWITCH_VARIANT.INDIGO]: "peer-checked:bg-indigo-100 bg-white peer-checked:ring-indigo-300 ring-indigo-100 after:bg-indigo-300 peer-checked:after:bg-indigo-600",
  [SWITCH_VARIANT.VIOLET]: "peer-checked:bg-violet-100 bg-white peer-checked:ring-violet-300 ring-violet-100 after:bg-violet-300 peer-checked:after:bg-violet-600",
  [SWITCH_VARIANT.PURPLE]: "peer-checked:bg-purple-100 bg-white peer-checked:ring-purple-300 ring-purple-100 after:bg-purple-300 peer-checked:after:bg-purple-600",
  [SWITCH_VARIANT.FUSHSIA]:"peer-checked:bg-fuchsia-100 bg-white peer-checked:ring-fuchsia-300 ring-fuchsia-100 after:bg-fuchsia-300 peer-checked:after:bg-fuchsia-600",
  [SWITCH_VARIANT.PINK]: "peer-checked:bg-pink-100 bg-white peer-checked:ring-pink-300 ring-pink-100 after:bg-pink-300 peer-checked:after:bg-pink-600",
  [SWITCH_VARIANT.ROSE]: "peer-checked:bg-rose-100 bg-white peer-checked:ring-rose-300 ring-rose-100 after:bg-rose-300 peer-checked:after:bg-rose-600",
  [SWITCH_VARIANT.SLATE]: "peer-checked:bg-slate-100 bg-white peer-checked:ring-slate-300 ring-slate-100 after:bg-slate-300 peer-checked:after:bg-slate-600",
  [SWITCH_VARIANT.GRAY]: "peer-checked:bg-gray-100 bg-white peer-checked:ring-gray-300 ring-gray-100 after:bg-gray-300 peer-checked:after:bg-gray-600",
  [SWITCH_VARIANT.ZINC]: "peer-checked:bg-zinc-100 bg-white peer-checked:ring-zinc-300 ring-zinc-100 after:bg-zinc-300 peer-checked:after:bg-zinc-600",
  [SWITCH_VARIANT.NEUTRAL]:"peer-checked:bg-neutral-100 bg-white peer-checked:ring-neutral-300 ring-neutral-100 after:bg-neutral-300 peer-checked:after:bg-neutral-600",
  [SWITCH_VARIANT.STONE]: "peer-checked:bg-stone-100 bg-white peer-checked:ring-stone-300 ring-stone-100 after:bg-stone-300 peer-checked:after:bg-stone-600",
};

export default function BooleanMode({defaultValue, onChange, variant, required}: BooleanModeProps) {
  const colorScheme = variantClassMap[variant || SWITCH_VARIANT.SLATE];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    onChange(e.target.checked);
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
      <div
        className={`group peer rounded-full duration-300 w-16 h-8 ring-2 after:duration-300 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-90 ${colorScheme}`}
      />
    </label>
  );
}
