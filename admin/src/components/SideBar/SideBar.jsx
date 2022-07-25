import './SideBar.scss';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { Link } from "react-router-dom";

const reload = () => {
    localStorage.clear('user')
    window.location.reload();
}

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="items">
                <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" className="avatar" />
            </div>
                <div className="itemsIcons">
                    <div className="item">
                    <DarkModeOutlinedIcon className='icon'/>            
                    </div>
                    <div className="item">
                    <LightModeOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                    <NotificationsIcon className='icon'/>
                    </div>
                </div>
            <div className="top">
                <span className="logo">ADMIN PANEL</span>
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
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Envios</span>
                    </li>

                    <p className="title">ESTADISTICAS</p>
                    <Link to="/graficos" style={{ textDecoration: "none" }}>
                    <li>
                        <SignalCellularAltIcon className='icon' />
                        <span>Graficos</span>
                    </li>
                    </Link>
                    <li>
                        <NotificationsNoneOutlinedIcon className='icon' />
                        <span>Alertas</span>
                    </li>

                    <p className="title">USUARIO</p>
                    <li>
                        <AccountCircleOutlinedIcon className='icon' />
                        <span>Perfil</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className='icon' />
                        <span onClick={() => reload()}>Desconectarse</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}