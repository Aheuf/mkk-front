import { useState, type InputHTMLAttributes } from "react";
import { SWITCH_VARIANT } from "../Switch.constants";

type OmittedProps = "onChange" | "defaultValue";

interface BinaryChoiceProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps>{
  options: [string, string];
  icons?: string[];
  defaultValue?: string;
  onChange: (value: string) => void;
  variant?: SWITCH_VARIANT;
  required?: boolean;
}


const variantClassMap: Record<SWITCH_VARIANT, string> = {
  [SWITCH_VARIANT.RED]: "bg-red-100 ring-red-300",
  [SWITCH_VARIANT.ORANGE]: "bg-orange-100 ring-orange-300",
  [SWITCH_VARIANT.AMBER]: "bg-amber-100 ring-amber-300",
  [SWITCH_VARIANT.YELLOW]: "bg-yellow-100 ring-yellow-300",
  [SWITCH_VARIANT.LIME]: "bg-lime-100 ring-lime-300",
  [SWITCH_VARIANT.GREEN]: "bg-green-100 ring-green-300",
  [SWITCH_VARIANT.EMERALD]:"bg-emerald-100 ring-emerald-300",
  [SWITCH_VARIANT.TEAL]: "bg-teal-100 ring-teal-300",
  [SWITCH_VARIANT.CYAN]: "bg-cyan-100 ring-cyan-300",
  [SWITCH_VARIANT.SKY]: "bg-sky-100 ring-sky-300",
  [SWITCH_VARIANT.BLUE]: "bg-blue-100 ring-blue-300",
  [SWITCH_VARIANT.INDIGO]: "bg-indigo-100 ring-indigo-300",
  [SWITCH_VARIANT.VIOLET]: "bg-violet-100 ring-violet-300",
  [SWITCH_VARIANT.PURPLE]: "bg-purple-100 ring-purple-300",
  [SWITCH_VARIANT.FUSHSIA]:"bg-fuchsia-100 ring-fuchsia-300",
  [SWITCH_VARIANT.PINK]: "bg-pink-100 ring-pink-300",
  [SWITCH_VARIANT.ROSE]: "bg-rose-100 ring-rose-300",
  [SWITCH_VARIANT.SLATE]: "bg-slate-100 ring-slate-300",
  [SWITCH_VARIANT.GRAY]: "bg-gray-100 ring-gray-300",
  [SWITCH_VARIANT.ZINC]: "bg-zinc-100 ring-zinc-300",
  [SWITCH_VARIANT.NEUTRAL]:"bg-neutral-100 ring-neutral-300",
  [SWITCH_VARIANT.STONE]: "bg-stone-100 ring-stone-300"
};

const circleVariantClassMap: Record<SWITCH_VARIANT, string> = {
  [SWITCH_VARIANT.RED]: "bg-red-600",
  [SWITCH_VARIANT.ORANGE]: "bg-orange-600",
  [SWITCH_VARIANT.AMBER]: "bg-amber-600",
  [SWITCH_VARIANT.YELLOW]: "bg-yellow-600",
  [SWITCH_VARIANT.LIME]: "bg-lime-600",
  [SWITCH_VARIANT.GREEN]: "bg-green-600",
  [SWITCH_VARIANT.EMERALD]:"bg-emerald-600",
  [SWITCH_VARIANT.TEAL]: "bg-teal-600",
  [SWITCH_VARIANT.CYAN]: "bg-cyan-600",
  [SWITCH_VARIANT.SKY]: "bg-sky-600",
  [SWITCH_VARIANT.BLUE]: "bg-blue-600",
  [SWITCH_VARIANT.INDIGO]: "bg-indigo-600",
  [SWITCH_VARIANT.VIOLET]: "bg-violet-600",
  [SWITCH_VARIANT.PURPLE]: "bg-purple-600",
  [SWITCH_VARIANT.FUSHSIA]:"bg-fuchsia-600",
  [SWITCH_VARIANT.PINK]: "bg-pink-600",
  [SWITCH_VARIANT.ROSE]: "bg-rose-600",
  [SWITCH_VARIANT.SLATE]: "bg-slate-600",
  [SWITCH_VARIANT.GRAY]: "bg-gray-600",
  [SWITCH_VARIANT.ZINC]: "bg-zinc-600",
  [SWITCH_VARIANT.NEUTRAL]:"bg-neutral-600",
  [SWITCH_VARIANT.STONE]: "bg-stone-600"
};

export default function BinaryChoice({ options, defaultValue, onChange, variant=SWITCH_VARIANT.SLATE, required, icons, ...props }: BinaryChoiceProps) {
  const [selectedValue, setSelectedValue] = useState<string>( defaultValue || options[0] );
  const colorScheme = variantClassMap[variant];
  const circleColor = circleVariantClassMap[variant];

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.checked ? options[1] : options[0];

    setSelectedValue(value);
    onChange(value);
  }

  return (
    <>
      <p className={`mr-3 ${selectedValue === options[0] ? "underline" : ""}`.trim()}>
        {options[0]}
      </p>
      <label className="relative flex items-center cursor-pointer">
        <input
          id="SwitchInput"
          type="checkbox"
          className="sr-only peer"
          onChange={handleChange}
          defaultChecked={selectedValue === options[1]}
          required={required}
          {...props}
        />
        <div className={`group peer rounded-full duration-300 w-16 h-8 ring-2 ${colorScheme}`}>
          <span className={`absolute top-1 left-1 h-6 w-6 rounded-full ${circleColor} flex text-center items-center justify-center transform transition-transform duration-300 ${selectedValue === options[1] ? "translate-x-8" : "translate-x-0"}`}>
            {icons &&
              <span className="text-white material-symbols-outlined">
                {selectedValue === options[0] ? icons[0]: icons[1]}
              </span>
            }
          </span> 
        </div>
      </label>
      <p className={`ml-3 ${selectedValue === options[1] ? "underline" : ""}`.trim()}>
        {options[1]}
      </p>
    </>
  );
}


// text-white after:content-['r'] peer-checked:after:content-['a'] 