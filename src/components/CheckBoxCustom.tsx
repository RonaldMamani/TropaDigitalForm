type Props = {
    label: string
    checked: boolean
    onChange: () => void
}

export default function CheckBoxCustom({label,checked,onChange}:Props) {
    return (
        <div className="flex gap-2 items-center">
            <input
                type="checkbox"
                className="rounded-full w-4 h-4 border-[#CC6138] border-2 hover:border-4 transition-all"
                checked={checked}
                onChange={onChange}
            />
                <label htmlFor="checkbox2" className="">
                <span className="text-sm font-['Poppins'] text-[#CC6138]">
                    {label}
                </span>
            </label>
        </div>
    )
}