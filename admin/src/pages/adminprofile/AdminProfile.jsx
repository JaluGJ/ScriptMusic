import React, { useState } from 'react'
import './AdminProfile.scss'
import SideBar from '../../components/SideBar/SideBar'
import Loading from '../../components/Loading/Loading'
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { changeEmailAdmin, changePasswordAdmin } from '../../redux/actions';
import {validate, validate2} from './erros.jsx'

function AdminProfile() {
    const dispatch = useDispatch();
    const profile = useSelector(state => state.adminprofile);
    const userToken = localStorage.user

    // const [email, setEmail] = useState({});
    // const [pass, setPass] = useState({});
    const [input1, setInput1] = useState({});
    const [input2, setInput2] = useState({});
    const [error1, setError1] = useState({});
    const [error2, setError2] = useState({});

    function handleInput1(e){
        setInput1({
            ...input1,
            [e.target.name] : e.target.value,
        })

        setError1(validate({
            ...input1,
            [e.target.name]: e.target.value
        }))
    }

    function handleInput2(e){
        setInput2({
            ...input2,
            [e.target.name] : e.target.value,
        })

        setError2(validate2({
            ...input2,
            [e.target.name]: e.target.value
        }))
    }

    function handleSubmitEmail(e){
        e.preventDefault()
        dispatch(changeEmailAdmin(input1, userToken))
        toast.success('¡Email se a cambiado con éxito!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    function handleSubmitPassword(e){
        e.preventDefault()
        dispatch(changePasswordAdmin(input2, userToken))
        toast.success('¡Contraseña se a cambiado con éxito!', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        // <Loading />
        <div className="profile">
            <ToastContainer/>
            <SideBar />
            <div className="container">
                <div className="top">MODIFICAR PERFIL DE ADMINISTRADOR</div>
                <div className="bottom">
                    <div className="left">
                        <img src={profile.image} alt="" />
                        <h3>Nombre</h3>
                        <p>{profile.firstName}</p>
                        <h3>Apellido</h3>
                        <p>{profile.lastName}</p>
                        <h3>Correo electronico</h3>
                        <p> {profile.email}</p>
                        <h3>Rol</h3>
                        <p>{profile.isAdmin === true ? 'Administrador' : 'Usuario regular'}</p>
                    </div>
                    
                    <div className="rigth" >
                        <form onSubmit={e => handleSubmitEmail(e)}>
                            <h3>Cambiar correo electronico</h3>
                            <label>Correo actual</label>
                            <input name='email' onChange={e => handleInput1(e)} type="text" />
                            {error1.email && 
                                (<p>{error1.email}</p>)
                            }
                            <label> Contraseña</label>
                            <input name='password' onChange={e => handleInput1(e)} type="password" />
                            {error1.password && 
                                (<p>{error1.password}</p>)
                            }
                            <label>Nuevo Correo</label>
                            <input name='newEmail' onChange={e => handleInput1(e)} type="text" />
                            {error1.newEmail && 
                                (<p>{error1.newEmail}</p>)
                            }
                            <button>Cambiar Correo</button>
                        </form>

                        <form onSubmit={e => handleSubmitPassword(e)}>
                            <h3>Cambiar contraseña</h3>
                            <label>Correo actual</label>
                            <input type="text" name='email' onChange={e => handleInput2(e)} />
                            {error2.email && 
                                (<p>{error2.email}</p>)
                            }
                            <label> Contraseña</label>
                            <input type="password" name='password' onChange={e => handleInput2(e)} />
                            {error2.email && 
                                (<p>{error2.password}</p>)
                            }
                            <label>Nueva contraseña</label>
                            <input type="password" name='newPassword' onChange={e => handleInput2(e)} />
                            {error2.email && 
                                (<p>{error2.newPassword}</p>)
                            }
                            <button>Cambiar contraseña</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default AdminProfile