import { useState } from "react"
import Modal from "../components/Modal"
import { Link, useNavigate } from "react-router-dom"
import CheckBoxCustom from "../components/CheckBoxCustom"
import InputPassword from "../components/InputPassword"
import InputEmail from "../components/InputEmail"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [checkbox, setCheckbox] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const navigate = useNavigate()

    const validateEmail = (value: string) => {
        // Validar o formato do email
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!isValidEmail) {
            setEmailError("Insira corretamente o email")
        } else {
            setEmailError(""); // Limpar a mensagem de erro se o email for válido
        }
    }

    const validatePassword = (value: string) => {
        // Validar se a senha contém apenas números
        const isValidPassword = /^\d+$/.test(value);
        if (!isValidPassword) {
            setPasswordError("Apenas números são permitidos nesse campo");
        } else {
            setPasswordError("")
        }
    }

    const openModal = () => {
        setShowModal(true)
    };

    const closeModal = () => {
        setShowModal(false);
    }

    const handleLogin = () => {
        // Verifique se os campos de email e senha estão preenchidos corretamente
        if (email.trim() !== '' && password.trim() !== '' && emailError === "" && passwordError === "") {
            // Se estiverem, navegue para a página /dashboard
            navigate('/dashboard');
        } else {
            // Se houver erros nos campos, exiba uma mensagem ou realize alguma ação apropriada
            console.log('Por favor, preencha corretamente os campos de login.');
        }
    }

    const isSubmitDisabled = email.trim() === '' || password.trim() === '' || emailError !== '' || passwordError !== ''

    return (
        <>
            <section className="px-[90px] pt-[180px] pb-9">
                <div className="pb-[78px]">
                    <h3 className="text-8xl font-['Poppins'] font-bold text-[#CC6138] text-center">Login</h3>
                </div>
                <form className="flex flex-col gap-5">
                    <div className="flex flex-col gap-12">
                        <InputEmail 
                            label="E-mail"
                            value={email}
                            onChange={(value) => {
                                setEmail(value)
                                validateEmail(value)
                            }}
                            placeholder="Insira seu e-mail"
                            errorMessage="Insira corretamente o email"
                            required
                        />
                        <InputPassword 
                            label="Senha"
                            value={password}
                            onChange={(value) => {
                                setPassword(value)
                                validatePassword(value)
                            }}
                            placeholder="Insira sua senha utilizando apenas números"
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            errorMessage={passwordError}
                            required
                        />
                    </div>
                    <div>
                        <CheckBoxCustom 
                            label="Lembrar e-mail e senha"
                            checked={checkbox}
                            onChange={() => setCheckbox(!checkbox)}
                        />
                    </div>
                    <div className="pt-20 flex justify-center">
                        <button 
                            type="button" 
                            onClick={handleLogin} 
                            disabled={isSubmitDisabled} 
                            className={`
                                bg-[#CC6138] px-12 py-2 ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#CC6138]/70 transition-colors'}`}>
                            <span className="text-white font-['Poppins'] text-[30px] font-bold">Entrar</span>
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <button 
                            onClick={openModal} 
                            className="text-[#CC6138] font-['Poppins'] font-semibold text-lg hover:text-[#CC6138]/75 transition-all">
                            Esqueceu a senha?
                        </button>
                    </div>
                    <Modal isOpen={showModal} onClose={closeModal} />
                </form>
                <div className="pt-[130px] text-center">
                    <span className="flex justify-center gap-1 items-center text-lg">
                        Novo por aqui?
                        <Link 
                            to='/cadastro' 
                            className="text-[#CC6138] font-semibold hover:font-bold transition-all">Cadastre-se</Link>
                    </span>
                </div>
            </section>
        </>
    )
}