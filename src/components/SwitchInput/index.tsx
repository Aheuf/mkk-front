import { useState } from "react";

interface SwitchInputProps {
  options: [string, string];
  defaultValue?: string;
  onChange: (value: string) => void;
}

export default function SwitchInput({ options, defaultValue, onChange }: SwitchInputProps) {
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue || options[0]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value: string = e.target.checked ? options[1] : options[0];

    setSelectedValue(value);
    onChange(value);
  }

  return (
    <div className="inline-flex items-center">
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
        <div className="group peer bg-slate-100 rounded-full duration-300 w-16 h-8 ring-2 ring-slate-300 after:duration-300 after:bg-slate-600 after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-90" />
      </label>
      <p className={`ml-3 ${selectedValue === options[1] ? "underline" : ""}`.trim()}>
        {options[1]}
      </p>
    </div>
  );
}
