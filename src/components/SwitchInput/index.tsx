import { useState } from "react";

interface SwitchInputProps {
  options: [string, string];
  defaultValue?: string;
  onChange: (value: string) => void;
  variant?: SWITCH_VARIANT;
  className?:string;
}

export enum SWITCH_VARIANT {
  RED="red",
  ORANGE="orange",
  AMBER="amber",
  YELLOW="yellow",
  LIME="lime",
  GREEN="green",
  EMERALD="emerald",
  TEAL="teal",
  CYAN="cyan",
  SKY="sky",
  BLUE="blue",
  INDIGO="indigo",
  VIOLET="violet",
  PURPLE="purple",
  FUSHSIA="fushsia",
  PINK="pink",
  ROSE="rose",
  SLATE="slate",
  GRAY="gray",
  ZINC="zinc",
  NEUTRAL="neutral",
  STONE="stone"
}

const variantClassMap: Record<SWITCH_VARIANT, string> = {
  [SWITCH_VARIANT.RED]: "bg-red-100 ring-red-300 after:bg-red-600",
  [SWITCH_VARIANT.ORANGE]: "bg-orange-100 ring-orange-300 after:bg-orange-600",
  [SWITCH_VARIANT.AMBER]: "bg-amber-100 ring-amber-300 after:bg-amber-600",
  [SWITCH_VARIANT.YELLOW]: "bg-yellow-100 ring-yellow-300 after:bg-yellow-600",
  [SWITCH_VARIANT.LIME]: "bg-lime-100 ring-lime-300 after:bg-lime-600",
  [SWITCH_VARIANT.GREEN]: "bg-green-100 ring-green-300 after:bg-green-600",
  [SWITCH_VARIANT.EMERALD]: "bg-emerald-100 ring-emerald-300 after:bg-emerald-600",
  [SWITCH_VARIANT.TEAL]: "bg-teal-100 ring-teal-300 after:bg-teal-600",
  [SWITCH_VARIANT.CYAN]: "bg-cyan-100 ring-cyan-300 after:bg-cyan-600",
  [SWITCH_VARIANT.SKY]: "bg-sky-100 ring-sky-300 after:bg-sky-600",
  [SWITCH_VARIANT.BLUE]: "bg-blue-100 ring-blue-300 after:bg-blue-600",
  [SWITCH_VARIANT.INDIGO]: "bg-indigo-100 ring-indigo-300 after:bg-indigo-600",
  [SWITCH_VARIANT.VIOLET]: "bg-violet-100 ring-violet-300 after:bg-violet-600",
  [SWITCH_VARIANT.PURPLE]: "bg-purple-100 ring-purple-300 after:bg-purple-600",
  [SWITCH_VARIANT.FUSHSIA]: "bg-fuchsia-100 ring-fuchsia-300 after:bg-fuchsia-600",
  [SWITCH_VARIANT.PINK]: "bg-pink-100 ring-pink-300 after:bg-pink-600",
  [SWITCH_VARIANT.ROSE]: "bg-rose-100 ring-rose-300 after:bg-rose-600",
  [SWITCH_VARIANT.SLATE]: "bg-slate-100 ring-slate-300 after:bg-slate-600",
  [SWITCH_VARIANT.GRAY]: "bg-gray-100 ring-gray-300 after:bg-gray-600",
  [SWITCH_VARIANT.ZINC]: "bg-zinc-100 ring-zinc-300 after:bg-zinc-600",
  [SWITCH_VARIANT.NEUTRAL]: "bg-neutral-100 ring-neutral-300 after:bg-neutral-600",
  [SWITCH_VARIANT.STONE]: "bg-stone-100 ring-stone-300 after:bg-stone-600",
};


export default function SwitchInput({ options, defaultValue, onChange, variant, className }: SwitchInputProps) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || options[0]);
  const colorScheme = variantClassMap[variant || SWITCH_VARIANT.SLATE] ;


  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.checked ? options[1] : options[0];

    setSelectedValue(value);
    onChange(value);
  }

  return (
    <div className={`inline-flex items-center ${className}`.trim()}>
      <p className={`mr-3 ${selectedValue === options[0] ? "underline" : ""}`.trim()}>
        {options[0]}
      </p>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onChange={handleChange}
          defaultChecked={selectedValue === options[1]}
        />
        <div className={`group peer rounded-full duration-300 w-16 h-8 ring-2 after:duration-300 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-90 ${colorScheme}`} />
      </label>
      <p className={`ml-3 ${selectedValue === options[1] ? "underline" : ""}`.trim()}>
        {options[1]}
      </p>
    </div>
  );
}
