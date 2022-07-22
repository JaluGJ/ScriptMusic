import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { getOneUser } from '../../redux/actions'
import SideBar from '../SideBar/SideBar'
import './UpdateUser.scss'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function UpdateUser() {
    const { id } = useParams();
    const dispatch = useDispatch();
    // const user = useSelector(state => state.user);
    const [input, setInput] = useState({
        firstName: '',
        lastName: '',
        email: '',
        image: '',
    });

    useEffect(() => {
        dispatch(getOneUser(id))
    }, [])





    return (
        <div className="updateuser">
            <SideBar />
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

                    <div className="forminput">
                        <form >

                            <label>Nombre</label>
                            <input
                                type="text"
                                // placeholder={product.image}
                                name='image'
                            // value={input.image}
                            // onChange={(e) => handleinput(e)}
                            />
                            {/* {error.image && (
                            <p>{error.image}</p>
                        )} */}

                            <label>Apellido</label>
                            <input
                                type="text"
                                // placeholder={product.image}
                                name='image'
                            // value={input.image}
                            // onChange={(e) => handleinput(e)}
                            />
                            {/* {error.image && (
                            <p>{error.image}</p>
                        )} */}

                            <label>Email</label>
                            <input
                                type="text"
                                // placeholder={product.image}
                                name='image'
                            // value={input.image}
                            // onChange={(e) => handleinput(e)}
                            />
                            {/* {error.image && (
                            <p>{error.image}</p>
                        )} */}


                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UpdateUser