import Description from "../Description";
import BinaryChoice from "./BinaryChoice";
import BooleanMode from "./BooleanMode";
import { SWITCH_MODE, SWITCH_VARIANT } from "./Switch.constants";

interface SwitchInputProps {
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

export default function SwitchInput({ options=["Option A","Option B"], defaultValue, onChange, variant, className, required, description, mode, icons }: SwitchInputProps) {
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
          /> :
          <BooleanMode
            onChange={onChange}
            defaultValue={defaultValue as boolean}
            required={required}
            variant={variant}
          />
        }
      </div>
    </div>
  );
}
