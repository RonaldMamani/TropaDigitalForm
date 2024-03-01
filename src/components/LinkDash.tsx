import { Link } from "react-router-dom";

type Props = {
    className: string
    imageUrl: string
    imgDescr: string
    href: string
    nameLink?: string
}

export default function LinkDash({className,imageUrl,imgDescr,href,nameLink} : Props) {
    return (
        <Link to={href} className={`
            ${className} 
            px-11 py-4 flex gap-6
            transition-colors
            `} >
            <div>
                <img src={imageUrl} alt={imgDescr} className="hover:fill-white"/>
            </div>
            <span className="font-['DM Sans'] font-semibold text-lg">{nameLink}</span>
        </Link>
    )
}