import Info from "../assets/info.svg"

type Props = {
    title: string
    subTitle: string
    statistic: string
    image: string
    className?: string
}

export default function BoxStatsNumber({title, statistic, subTitle,image, className}: Props) {
    return(
        <div className="px-8 py-4 rounded-3xl grid grid-rows-4 shadow-black shadow-sm h-full">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <h6 className="font-['Roboto'] text-[#828282] font-semibold uppercase text-sm">{title}</h6>
                    <span className="text-[#CC6138] text-2xl font-['Roboto']">{statistic}</span>
                    <span className="font-['Roboto'] text-xs text-[#828282]">{subTitle}</span>
                </div>
                <div>
                    <img src={Info} alt="Icone de Informação" className="w-5 h-5" />
                </div>
            </div>
            <div className="row-span-3">
                <img src={image} alt="Grafico Estatistico" className={`w-full ${className}`}  />
            </div>
        </div>
    )
}