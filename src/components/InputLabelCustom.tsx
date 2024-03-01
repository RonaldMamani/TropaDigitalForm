import React from "react"

type Props = {
    label: string
    type: string
    value: any
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    required?: boolean
}

export default function InputLabelCustom({label,type,value,onChange,placeholder,required} : Props) {

    return(
        <div className="flex flex-col">
            <label className="text-[22px] font-['DM Sans'] font-bold text-[#CC6138]">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className="
                        border-b border-[#CC6138] p-2 w-full 
                        border-t-transparent border-l-transparent border-r-transparent outline-none 
                        "
                    required={required}
                />
            </div>
        </div>
    )
}