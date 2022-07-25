import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearCache, getAllUsers, getOneUser } from '../../redux/actions'
import SideBar from '../SideBar/SideBar'
import './UpdateUser.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function UpdateUser({ logout }) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const userToken = localStorage.user;
    const [input, setInput] = useState({});

    useDispatch(() => {
        setInput({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            image: user.image,
        })
    }, [user])

    useEffect(() => {
        dispatch(getOneUser(id, userToken))
        dispatch(getAllUsers(userToken))
        return () => {
            dispatch(clearCache())
        }
    }, [])


    return (
        <div className="updateuser">
            <SideBar logout={logout} />
            {console.log(user)}
            <div className="container">

                <div className="top">
                    <Link to={'/users'} style={{ textDecoration: 'none' }} >
                        <button> <ArrowBackIcon /> ATRAS</button>
                    </Link>
                    <h1 className="title">Modificar Usuario</h1>
                </div>

                {user.length === 0 ? <div >
                            <img src="https://i.gifer.com/VAyR.gif" alt='image' />
                        </div> :
                <div className="bottom">
                    <div className="image">
                        <img src={user.image} alt="LOL" />
                    </div>
                    <div>
                        {/* {user.length === 0 ? <div >
                            <img src="https://i.gifer.com/VAyR.gif" alt='image' />
                        </div> : */}
                            <div className="forminput">
                                <h1> Nombre </h1>
                                <h2> {user.firstName} </h2>
                                <h1> Apellido </h1>
                                <h2> {user.lastName} </h2>
                                <h1> Correo electronico </h1>
                                <h2> {user.email} </h2>
                                <h1> Usuario validado </h1>
                                {user.isConfirmed === true ? <CheckCircleIcon className='validado' /> : <CancelIcon className='novalidado' />}
                                {user.isAdmin === true ? <button>Remover rol de administrador</button> : <button>Asignar rol de administrador</button>}
                            </div>
                    </div>

                </div>

                        }
            </div>
        </div>
    )
}

