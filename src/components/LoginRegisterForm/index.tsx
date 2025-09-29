import { useState } from "react";
import SwitchInput from "../Form/SwitchInput";
import { SWITCH_MODE } from "../Form/SwitchInput/Switch.constants";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import type { REGISTRATION_STATUS } from "../../constant";
import type { LoginPlayerPayload, NewPlayerPayload } from "../../models/Player";

interface LoginRegisterFormProps {
    connectPlayer: (payload: LoginPlayerPayload) => void;
    registerPlayer: (payload: NewPlayerPayload) => Promise<boolean>;
    registrationStatus: REGISTRATION_STATUS;
}

export default function LoginRegisterForm({ connectPlayer, registerPlayer, registrationStatus }: LoginRegisterFormProps) {
    const optionConnexion = "connexion";
    const optionInscription = "inscription";
    const [switchValue, setSwitchValue] = useState(optionConnexion);

    const handleRegister = (payload: NewPlayerPayload) => {
        registerPlayer(payload).then(isSuccessful => {
            if (isSuccessful)
                setSwitchValue(optionConnexion);
        });
    }

    return (
        <div className="grid grid-cols-1 rounded-xl bg-white/65 p-10 gap-4 lg:w-1/2 justify-items-center">
            <SwitchInput onChange={value => setSwitchValue(value as string)}
                mode={SWITCH_MODE.BINARY_CHOICE}
                options={[optionConnexion, optionInscription]}
                icons={["account_circle", "person_edit"]}
                value={switchValue} />
            {switchValue === optionConnexion
                ? <LoginForm onSubmit={connectPlayer} />
                : <RegisterForm onSubmit={handleRegister} registrationStatus={registrationStatus} />
            }
        </div>
    )
}
