import { Outlet } from "react-router-dom";

export default function Home() {
    return(
        <main className="grid grid-cols-2">
            <div className="bg-[url('./assets/background-tropa.png')] bg-cover bg-no-repeat w-full min-h-screen relative">
                <div className="absolute bottom-14 left-16 flex flex-col gap-5">
                    <h5 className="text-white font-['Poppins'] text-6xl font-bold w-[390px]">Bem vindo a Tropa Digital</h5>
                    <p className="text-white font-['Poppins'] text-[28px] font-extralight0 w-[525px]">Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </div>
            </div>
            <Outlet />
        </main>
    )
}