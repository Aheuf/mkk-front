import type { InputHTMLAttributes } from "react";
import Description from "../Description";
import BinaryChoice from "./BinaryChoice";
import BooleanMode from "./BooleanMode";
import { SWITCH_MODE, SWITCH_VARIANT } from "./Switch.constants";

type OmittedProps = "onChange" | "defaultValue"

interface SwitchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, OmittedProps>{
  options?: [string, string];
  defaultValue?: string | boolean;
  onChange: (value: string | boolean) => void;
  variant?: SWITCH_VARIANT;
  className?:string;
  required?: boolean;
  description?:string;
  mode: SWITCH_MODE;
  icons?:string[];
}

export default function SwitchInput({ options=["Option A","Option B"], defaultValue, onChange, variant, className, required, description, mode, icons, ...props }: SwitchInputProps) {
  return (
    <div className="grid w-max">
      {(description || required) && <Description description={description} required={required}/>}
      <div className={`flex items-center ${className}`.trim()}>
        { mode === SWITCH_MODE.BINARY_CHOICE ?
          <BinaryChoice
            options={options}
            onChange={onChange}
            icons={icons}
            defaultValue={defaultValue as string}
            variant={variant}
            {...props}
          /> :
          <BooleanMode
            onChange={onChange}
            defaultValue={defaultValue as boolean}
            icons={icons}
            required={required}
            variant={variant}
            {...props}
          />
        }
      </div>
    </div>
  );
}
