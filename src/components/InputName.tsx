import { useState } from "react"
import InputLabelCustom from "./InputLabelCustom"

import Checked from "../assets/Ok.svg"

type Props = {
    label: string
    value: string
    onChange: (value: string) => void
    placeholder: string
    required?: boolean
}

export default function InputName({label,onChange,placeholder,value,required}: Props) {

    const [isValidName, setIsValidName] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value;
        onChange(name);
        setIsValidName(name.trim() !== '')
    }

    return(
        <div className="relative">
            <InputLabelCustom
                label={label}
                type="text"
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder}
                required={required}
            />
            <div className="absolute right-3 bottom-2">
                {isValidName && <img src={Checked} alt="Icone de Nome" />}
            </div>
        </div>
    )
}