import Info from "../assets/info.svg"

type Props = {
    title: string
    subTitle: string
    image: string
    className?: string
    isGreat?: boolean
}

export default function BoxStatistic({title, subTitle,image, className, isGreat}: Props) {
    return(
        <div className="px-8 py-4 rounded-3xl grid grid-rows-4 shadow-black shadow-sm  h-full">
            <div className="flex justify-between items-start">
                <div className="flex flex-col">
                    <h6 className={`font-['Roboto'] text-[#828282] font-semibold uppercase ${isGreat ? 'text-2xl' : 'text-sm'}`}>{title}</h6>
                    <span className={`font-['Roboto'] text-[#828282] ${isGreat ? 'text-xl' : 'text-xs'}`}>{subTitle}</span>
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