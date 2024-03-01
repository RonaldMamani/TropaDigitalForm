import InputLabelCustom from "./InputLabelCustom";

import Email from "../assets/email.svg"
import Checked from "../assets/Ok.svg"
import { useState } from "react";

type Props = {
    label: string
    value: string
    onChange: (value: string) => void
    placeholder: string
    required: boolean
    errorMessage?: string
}

export default function InputEmail({label,value,onChange,placeholder,required,errorMessage}: Props) {

    const [isValidEmail, setIsValidEmail] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        onChange(email);
        setIsValidEmail(validateEmail(email))
    }

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email)
    };

    return (
        <div>
            <div className="relative">
                <InputLabelCustom 
                    label={label}
                    type="email"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    required={required}
                />
                <div className="absolute right-3 bottom-2">
                    <img src={isValidEmail ? Checked : Email} alt="Icone de Email" />
                </div>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    )
}