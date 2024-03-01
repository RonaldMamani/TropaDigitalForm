import { useState } from "react";
import InputEmail from "./InputEmail";

type Elements = {
    isOpen: boolean;
    onClose: () => void
}

export default function Modal({isOpen, onClose} : Elements) {
    const [email, setEmail] = useState('');

    const handleSend = () => {
        // Aqui você pode adicionar a lógica para enviar o email de recuperação de senha
        console.log('Email enviado para:', email);
        onClose(); // Fecha o modal após enviar o email
    };

    return(
        <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'} flex justify-center items-center bg-gray-800 bg-opacity-50`}>
            <div className="bg-white px-[52px] py-16 rounded-2xl border-black border shadow-black shadow-lg w-[630px] flex flex-col gap-9">
                <div className="flex flex-col gap-4 text-center">
                    <h2 className="text-[#CC6138] text-[50px] font-bold font-['Poppins']">Esqueci minha senha</h2>
                    <p className="text-[#33333] font-['Poppins'] text-[24px] px-12">Para redefinir sua senha, informe o e-mail cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>
                </div>
                <InputEmail 
                    label="E-mail"
                    value={email}
                    onChange={setEmail}
                    placeholder="Insira seu e-mail"
                    required
                />
                <div className="flex flex-col gap-1 items-center pt-4">
                    <div>
                        <button onClick={handleSend} className="bg-[#CC6138] text-white px-12 py-2 hover:bg-[#CC6138]/70 transition-colors">
                            <span className="text-[25px] font-['DM Sans']">
                                Enviar
                            </span>
                        </button>
                    </div>
                    <div>
                        <button onClick={onClose} className=" bg-white/90 text-gray-700 px-12 py-2 rounded">
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}