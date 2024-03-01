import { useState } from "react"
import CheckBoxCustom from "../components/CheckBoxCustom"
import { Link } from "react-router-dom"

import InputEmail from "../components/InputEmail"
import InputPassword from "../components/InputPassword"
import InputName from "../components/InputName"
import ModalCadastro from "../components/ModalCadastro"

export default function Cadastro() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [showModal, setShowModal] = useState(false)

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault()
        setShowModal(true)

    // Verificação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        setEmailError('O email deve estar no formato correto')
        return
    }

    // Verificação de senha (apenas números)
    if (!/^\d+$/.test(password)) {
        setPasswordError('A senha deve conter apenas números')
        return
    }

    // Verificação de confirmação de senha
    if (password !== confirmPassword) {
        setConfirmPasswordError('Senhas diferentes')
        return
    }
    }

    const closeModal = () => {
        setShowModal(false); // Fechar o modal
    }

    return (
        <div className="px-[90px] pt-[85px] pb-28 flex flex-col gap-6">
            <div className="flex flex-col gap-9">
                <Link to='/' className="text-lg text-[#333333]/85 font-semibold hover:text-black transition-colors">
                    <span className="">
                        {`< Voltar`}
                    </span>
                </Link>
                <h3 className="text-center text-[#CC6138] text-[88px] font-['Poppins'] font-bold">Cadastro</h3>
            </div>
            <form onSubmit={handleSignup} className="flex flex-col gap-9">
                <div className="flex flex-col gap-11">
                    <InputName 
                        label="Nome"
                        value={name}
                        onChange={setName}
                        placeholder="Digite seu Nome"
                        required
                    />
                    <InputEmail
                        label="Email"
                        value={email}
                        onChange={setEmail}
                        placeholder="Digite seu email"
                        required
                        errorMessage={emailError}
                    />
                    <InputPassword
                        label="Senha"
                        value={password}
                        onChange={setPassword}
                        showPassword={showPassword}
                        setShowPassword={setShowPassword}
                        placeholder="Digite sua senha"
                        required
                        errorMessage={passwordError}
                    />
                    <InputPassword
                        label="Confirmar Senha"
                        value={confirmPassword}
                        onChange={setConfirmPassword}
                        showPassword={showConfirmPassword}
                        setShowPassword={setShowConfirmPassword}
                        placeholder="Confirme sua senha"
                        required
                        errorMessage={confirmPasswordError}
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <CheckBoxCustom 
                        label="Li e Concordo com os Termos e Condições"
                        checked={checkbox1}
                        onChange={() => setCheckbox1(!checkbox1)}
                    />
                    <CheckBoxCustom 
                        label="Lembrar e-mail e senha"
                        checked={checkbox2}
                        onChange={() => setCheckbox2(!checkbox2)}
                    />
                </div>
                <div className="pt-[52px] flex justify-center">
                    <button 
                        type="submit" 
                        className="
                            bg-[#CC6138] text-white px-14 py-3 rounded
                            hover:bg-[#CC6138]/60 transition-colors
                            ">
                        <span className="text-[32px] font-['DM Sans'] font-bold">Cadastrar</span>
                    </button>
                </div>
            </form>
            <ModalCadastro emailSave={email} isOpen={showModal} onClose={closeModal} />
        </div>
    )
}