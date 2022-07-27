import './SideBar.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { adminProfile } from '../../redux/actions';
import { useEffect } from 'react';


const reload = () => {
    localStorage.clear('user')
    window.location.reload();
}


export default function SideBar() {
    const dispatch = useDispatch()
    const profile = useSelector(state => state.adminprofile)
    const userToken = localStorage.user

    useEffect(() => {
        dispatch(adminProfile(userToken))
    }, [])

    return (
        <div className='sidebar'>
            <div className="items">
                <img src={profile.image ? profile.image : "https://cdn-icons-png.flaticon.com/512/147/147144.png"} alt="avatar" className="avatar" />
            </div>

            <div className="top">
                <span className="logo">{profile.firstName ? profile.firstName + ' ' + profile.lastName : 'PANEL ADMIN'}</span>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">LISTADO</p>

                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlinedIcon className='icon' />
                            <span>Usuarios</span>
                        </li>
                    </Link>

                    <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreMallDirectoryOutlinedIcon className='icon' />
                            <span>Productos</span>
                        </li>
                    </Link>

                    <Link to="/promos" style={{ textDecoration: "none" }}>
                        <li>
                            <LocalOfferIcon className='icon' />
                            <span>Promos</span>
                        </li>
                    </Link>

                    <Link to="/graficos" style={{ textDecoration: "none" }}>
                        <li>
                            <SignalCellularAltIcon className='icon' />
                            <span>Graficos</span>
                        </li>
                    </Link>


                    <p className="title">USUARIO</p>

                    <Link to="/profile" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className='icon' />
                            <span>Perfil</span>
                        </li>
                    </Link>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span onClick={() => reload()}>Desconectarse</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}