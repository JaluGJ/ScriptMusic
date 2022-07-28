import SideBar from "../SideBar/SideBar";
import './NewUser.scss';
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addUser } from "../../redux/actions";
import { validate, checkprops } from "./errors";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useNavigate, Link} from 'react-router-dom';

export default function NewUser({logout}){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userToken = localStorage.user

useEffect(() => {
    setError(validate(input))
}, [])

const [error, setError] = useState({})
const [input, setInput] = useState({
   firstName: '',
   lastName: '',
   email: '',
   password: '',
})

function handleinput(e) {
    setInput({
        ...input,
        [e.target.name]: e.target.value
    })

    setError(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
}

function handleSubmit(e) {
    e.preventDefault()
    if (Object.keys(error).length > 0) {
        window.location.reload()
        return alert('Por favor verifique los campos')
    }
    dispatch(addUser(input, userToken))
    toast.success('Usuario agregado exitosamente', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    setInput({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })
    setTimeout(() => {
        navigate('/users')
      }, 1000);
    

  }

  return (
    <div className="newUser">
        <SideBar logout={logout} />
        <ToastContainer />
        <div className="newcontainerUser">
            <div className="topUser">
                <Link to={'/users'} style={{ textDecoration: 'none' }} >
                    <button> <ArrowBackIcon /> ATRAS</button>
                </Link>
                <h1 className="titleUser"> Añadir nuevo administrador </h1>
            </div>
            <div className="bottomUser">
                    <img src={input.image ? input.image : 'https://cdn-icons-png.flaticon.com/512/219/219983.png'} alt="" />
                    <form onSubmit={e => handleSubmit(e)} >
                        <div className="formInputUser">

                            <label>Nombre</label>
                            <input
                                type="text"
                                placeholder= 'Ingrese Nombre'
                                name='firstName'
                                value={input.firstName}
                                onChange={(e) => handleinput(e)}
                            />
                            {error.firstName && (
                            <p>{error.firstName}</p>
                        )}

                            <label>Apellido</label>
                            <input
                                type="text"
                                placeholder='Ingrese Apellido'
                                name='lastName'
                                value={input.lastName}
                                onChange={(e) => handleinput(e)}
                            />
                            {error.lastName && (
                            <p>{error.lastName}</p>
                        )}

                            <label>Email</label>
                            <input
                                type="text"
                                autoComplete="Off"
                                placeholder='username@scriptmusic.com'
                                name='email'
                                value={input.email}
                                onChange={(e) => handleinput(e)}
                            />
                            {error.email && (
                            <p>{error.email}</p>
                        )}

                            <label>Contraseña</label>
                            <input
                                type="password"
                                autoComplete="Off"
                                placeholder='1234ABcd'
                                name='password'
                                value={input.password}
                                onChange={(e) => handleinput(e)}
                            />
                            {error.password && (
                            <p>{error.password}</p>
                        )}

                            {!Object.keys(error).length && !checkprops(input) ?
                                <button>CREAR</button> :
                                <button disabled >CREAR</button>
                            }
                        </div>
                    </form>
            </div>
        </div>
    </div>
)

}
