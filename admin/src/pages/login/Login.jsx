import { useState } from 'react';
import './Login.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../redux/actions'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";
// import { adminLogin } from '../../redux/actions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginValidate from './inputs.js'
import validate from './validate.js'
// import { adminLogin, adminProfile } from '../../redux/actions';

const Login = () => {

    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const token = useSelector(state => state.token)
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

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     loginValidate(input)
    //         .then(res => {
    //             console.log("res", res)
    //             if (res) {
    //                 localStorage.setItem('user', res);
    //                 validate(res)
    //                     .then(res => {
    //                         console.log("res", res)
    //                         if (res === input.email) {
    //                             localStorage.setItem('email', input.email)
    //                             toast.success("Bienvenido", {
    //                                 position: "top-center",
    //                                 autoClose: 5000,
    //                                 hideProgressBar: false,
    //                                 closeOnClick: true,
    //                                 pauseOnHover: true,
    //                                 draggable: true,
    //                                 progress: undefined,
    //                             });
    //                             const data = localStorage.getItem('user')
    //                             if (data !== "null") {
    //                                 return authenticate().navigate('/users')
    //                             }
    //                         } else {
    //                             return toast.error("Usuario o contraseña incorrectos", {
    //                                 position: "top-center",
    //                                 autoClose: 5000,
    //                                 hideProgressBar: false,
    //                                 closeOnClick: true,
    //                                 pauseOnHover: true,
    //                                 draggable: true,
    //                                 progress: undefined,
    //                             });
    //                         }
    //                     })
    //             } else {
    //                 return toast.error("Usuario o contraseña incorrectos", {
    //                     position: "top-center",
    //                     autoClose: 5000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                 });
    //             }
    //         })
    // }


    async function handleSubmit(e) {
        e.preventDefault();
        const token = await loginValidate(input);
        if (token){
            // dispatch(adminProfile(token));
            const e = await validate(token)
            if (e === input.email) {
                localStorage.setItem('user', token)
                localStorage.setItem('email', e)
            }
        } else {
            return toast.error('Usuario o contraseña incorrecto.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        const data = localStorage.getItem('user')
        if(data !== "null"){
            toast.done('TODO OK.', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate('/products')
            return window.location.reload()
        }
        navigate('/login')
        return window.location.reload()
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