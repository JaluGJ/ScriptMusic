import { useState } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../redux/actions'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { adminLogin } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginValidate from './inputs.js'

const Login = ({ authenticate }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector(state => state.token)
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log(input)
        const token = await loginValidate(input)
        // Aca guardar el token
        console.log(token)
        token !== undefined
            ?
            authenticate().
            navigate('/home')
            : toast.error('Usuario o contraseña incorrecto.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }

    return (
        <div className="login">
            <ToastContainer />
            <div className="left">
                <img src={logo} alt="lol" />
                <h1>Script Music</h1>
                <h2>Panel de administrador</h2>
            </div>


            <div className="rigth">
                <form className="form" onSubmit={e => handleSubmit(e)}>
                    <label> Usuario </label>
                    <input
                        type="text"
                        name='email'
                        onChange={e => handleChange(e)}
                        value={input.email}
                    />
                    <label > Contraseña </label>
                    <input
                        type='password'
                        name='password'
                        onChange={e => handleChange(e)}
                        value={input.password}
                    />
                    <button>INGRESAR</button>
                </form>
            </div>
        </div>
    )
}

export default Login;