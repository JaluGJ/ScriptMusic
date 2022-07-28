import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearCache, getAllUsers, getOneUser, changeRoles } from '../../redux/actions'
import SideBar from '../SideBar/SideBar'
import './UpdateUser.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import Loading from '../Loading/Loading'
import { ToastContainer, toast } from 'react-toastify'


export default function UpdateUser({ logout }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const userToken = localStorage.user;
    const [input, setInput] = useState({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        image: user.image,
        isAdmin: user.isAdmin
    });

    useDispatch(() => {
        setInput({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin
        })
    }, [])

    useEffect(() => {
        dispatch(getOneUser(id, userToken))
        setInput({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
            isAdmin: user.isAdmin
        })
        return () => {
            dispatch(clearCache())
        }
    }, [])

    function adminRol(e) {
        e.preventDefault()
        setInput({
            ...input,
            isAdmin: true
        })
        dispatch(changeRoles(id, userToken))
        toast.success(`${user.firstName + user.lastName}, ahora es administrador.`, {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    function adminRolremove(e) {
        e.preventDefault()
        setInput({
            ...input,
            isAdmin: false
        })
        dispatch(changeRoles(id, userToken))
        toast.warn(`${user.firstName + user.lastName}, ya no es un administrador.`, {
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
        <div className="updateuser">
            <SideBar logout={logout} />
            <ToastContainer />
            <div className="container">

                <div className="top">
                    <Link to={'/users'} style={{ textDecoration: 'none' }} >
                        <button> <ArrowBackIcon /> ATRAS</button>
                    </Link>
                    <h1 className="title">Modificar Usuario</h1>
                </div>
{console.log(input)}

                {user.length === 0
                    ? <div className="bottomloa"> <Loading className='loading' /> </div>
                    : <div className="bottom">
                        <div className="image">
                            <img src={user.image} alt="LOL" />
                        </div>
                        <div>
                            <div className="forminput">
                                <h1> Nombre </h1>
                                <h2> {user.firstName} </h2>
                                <h1> Apellido </h1>
                                <h2> {user.lastName} </h2>
                                <h1> Correo electronico </h1>
                                <h2> {user.email} </h2>
                                <h1> Usuario validado </h1>
                                {user.isConfirmed === true ? <CheckCircleIcon className='validado' /> : <CancelIcon className='novalidado' />}
                                {input.isAdmin === true ? <button onClick={e => adminRolremove(e)} >Remover rol de administrador</button>
                                    : <button onClick={e => adminRol(e)} >Asignar rol de administrador</button>}
                            </div>
                        </div>
                    </div>
                }

            </div>
        </div>
    )
}

