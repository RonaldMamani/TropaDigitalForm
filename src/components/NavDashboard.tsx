import Hamburger from "../assets/hamburger.svg"
import Profile from "../assets/Profile.png"
import Document from "../assets/document.svg"
import NewDocument from "../assets/new-file.svg"
import DashIcon from "../assets/dashIcon.svg"
import Chat from "../assets/Chat.svg"
import CircleUser from "../assets/circle-user.svg"
import Out from "../assets/out.svg"
import { useLocation } from "react-router-dom"
import LinkDash from "./LinkDash"

export default function NavDashboard() {

    const {pathname} = useLocation()

    return (
        <aside className="min-h-screen shadow-black/10 shadow-md border-r-2 border-black/15 relative">
            <div className="px-8 py-10 flex flex-col gap-4">
                <div className="flex justify-end">
                    <button className="">
                        <img src={Hamburger} alt="Imagem Hamburger" />
                    </button>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <div className="flex flex-col gap-1 text-center">
                        <h5 className="font-['Poppins'] text-black text-2xl font-bold">Maria Helena S.</h5>
                        <span className="font-['Poppins'] text-black text-sm">teste@tropadigital.com</span>
                    </div>
                    <div>
                        <img src={Profile} alt="Foto de Perfil" className="w-[118px] h-[118px]" />
                    </div>
                </div>
            </div>
            <nav className="flex flex-col">
                <nav className="pb-5 border-b-2 border-black/20">
                    <LinkDash 
                        href="/dashboard"
                        className={`${pathname == '/dashboard' ? "bg-[#CC6138] text-white" : "text-[#333] hover:bg-[#CC6138] hover:text-white"}`}
                        imageUrl={DashIcon}
                        imgDescr="Icone do Dashboard"
                        nameLink="Dashboard"
                    />
                </nav>
                <nav className="flex flex-col gap-2 py-4 border-b-2 border-black/20">
                    <LinkDash 
                        href="/dashboard"
                        className={`${pathname == '/lorem1' ? "bg-[#CC6138] text-white" : "text-[#333] hover:bg-[#CC6138] hover:text-white"}`}
                        imageUrl={NewDocument}
                        imgDescr="Icone do Dashboard"
                        nameLink="LoremIpsum"
                    />
                    <LinkDash 
                        href="/dashboard"
                        className={`${pathname == '/lorem2' ? "bg-[#CC6138] text-white" : "text-[#333] hover:bg-[#CC6138] hover:text-white"}`}
                        imageUrl={Document}
                        imgDescr="Icone do Dashboard"
                        nameLink="LoremIpsum"
                    />
                    <LinkDash 
                        href="/dashboard"
                        className={`${pathname == '/lorem3' ? "bg-[#CC6138] text-white" : "text-[#333] hover:bg-[#CC6138] hover:text-white"}`}
                        imageUrl={Chat}
                        imgDescr="Icone do Dashboard"
                        nameLink="LoremIpsum"
                    />
                </nav>
                <nav className="py-4">
                    <LinkDash 
                        href="/dashboard"
                        className={`${pathname == '/lorem3' ? "bg-[#CC6138] text-white" : "text-[#333] hover:bg-[#CC6138] hover:text-white"}`}
                        imageUrl={CircleUser}
                        imgDescr="Icone do Dashboard"
                        nameLink="LoremIpsum"
                    />
                </nav>
                <div className="flex justify-end absolute bottom-10 right-0">
                    <LinkDash 
                        href="/"
                        className={`${pathname == '/' ? "bg-[#CC6138] text-white" : "text-[#333]"}`}
                        imageUrl={Out}
                        imgDescr="Icone do Sair"
                    />
                </div>
            </nav>
        </aside>
    )
}