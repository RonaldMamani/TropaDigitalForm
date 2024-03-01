import React from "react";
import Eye from '../assets/eye.svg';
import EyeHidden from '../assets/eye-hidden.svg';

type Props = {
    showPassword: boolean;
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function IconPassword({showPassword, setShowPassword}: Props) {
    
    return(
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 bottom-2"
            >
            <img src={showPassword ? EyeHidden : Eye} alt="Icone de Mostrar senha" />
        </button>
    )
}