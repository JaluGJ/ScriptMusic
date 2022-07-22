import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { clearCache, getAllUsers, getOneUser } from '../../redux/actions'
import SideBar from '../SideBar/SideBar'
import './UpdateUser.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function UpdateUser({logout}) {
    const { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const userToken = localStorage.user;
    const [error, setError] = useState({})
    const [input, setInput] = useState({});
    
    useDispatch(()=>{
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
        
        dispatch(UpdateUser(id, userToken))
        toast.success('Usuario Actualizado', {
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
            <SideBar logout={logout}/>
            {console.log(user)}
            <div className="container">

                <div className="top">
                    <Link to={'/users'} style={{ textDecoration: 'none' }} >
                        <button> <ArrowBackIcon /> ATRAS</button>
                    </Link>
                    <h1 className="title">Modificar Usuario</h1>
                </div>
                <div className="bottom">
                    <div className="image">
                        <img width='400px' heigh='400px' src="https://thumbs.dreamstime.com/b/female-avatar-profile-picture-vector-female-avatar-profile-picture-vector-102690279.jpg" alt="" />
                    </div>
                    <div>
                        {user.length === 0 ? <div >
                            <img src="https://i.gifer.com/VAyR.gif" alt='image' />
                        </div> :
                        <div className="forminput">
                        <form onSubmit={e => handleSubmit(e)}>

                                <label>Nombre</label>
                                <input
                                type="text"
                                placeholder={user.firstName}
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
                                placeholder={user.lastName}
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
                                placeholder={user.email}
                                name='email'
                                value={input.email}
                                 onChange={(e) => handleinput(e)}
                            />
                            {error.email && (
                            <p>{error.email}</p>
                        )}
                             {!Object.keys(error).length ?
                                        <button >ACTUALIZAR PRODUCTO</button> :
                                        <button disabled >ACTUALIZAR PRODUCTO</button>
                                    }

                        </form>
                        </div>
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

