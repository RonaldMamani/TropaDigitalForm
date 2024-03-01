import { useState } from "react";
import IconPassword from "./IconPassword";
import InputLabelCustom from "./InputLabelCustom";

type Props = {
    label: string
    value: string
    onChange: (value: string) => void
    showPassword: boolean
    setShowPassword: React.Dispatch<React.SetStateAction<boolean>>
    placeholder: string
    required?: boolean
    errorMessage?: string
}

export default function InputPassword({label,value,onChange,showPassword,placeholder,setShowPassword,errorMessage,required}: Props) {  
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        onChange(newValue);
        setError(null);
    }
    
    return (
        <div>
            <div className="relative">
                <InputLabelCustom
                    label={label}
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required={required}
                />
                <IconPassword showPassword={showPassword} setShowPassword={setShowPassword} />
            </div>
            {error && <p className="text-red-500">{error}</p>}
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>
    )
}