type Props = {
    emailSave: string
    isOpen: boolean
    onClose: () => void
}

export default function ModalCadastro({emailSave, isOpen, onClose} : Props) {
    if (!isOpen) {
        return null
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="relative bg-white w-[624px] px-16 py-12 flex flex-col gap-5 rounded-3xl shadow-black shadow-lg">
                <div className="flex flex-col gap-8 text-center pt-7">
                    <h4 className="text-[#CC6138] text-5xl font-['Poppins'] font-bold">Confirme seu E-mail</h4>
                    <div className="px-20 flex flex-col gap-5">
                        <p className="text-lg font-['Poppins']">
                        Para finalizar seu cadastro, enviamos um e-mail de confirmação para <span className="text-[#CC6138]">{emailSave}</span>. Verifique 
                        sua caixa de entrada e clique no link “Confirmar E-mail”.
                        </p>
                        <p className="text-lg font-['Poppins']">
                            Caso não tenha recebido o e-mail clique em “Enviar e-mail novamente” que enviaremos um novo e-mail.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex justify-center">
                        <button
                            onClick={onClose}
                            className="bg-[#CC6138] px-12 py-3"
                            >
                            <span className="text-white text-2xl">
                                Fechar
                            </span>
                        </button>
                    </div>
                    <div className="flex justify-center px-5 py-2">
                        <button className="text-[#333] text-lg font-['Poppins'] font-semibold">Enviar e-mail novamente</button>
                    </div>
                </div>
            </div>
        </div>
    )
}