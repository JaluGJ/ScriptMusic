import './SideBar.scss';
import logo from '../../assets/logo.png';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { Link } from "react-router-dom";


export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="top">
                <span className="logo">ADMIN PANEL</span>
            </div>

            <hr />

            <div className="center">
                <ul>
                    <p className="title">LISTADO</p>
                    <Link to="/usuarios" style={{ textDecoration: "none" }}>
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
                    <li>
                        <CreditCardOutlinedIcon className='icon' />
                        <span>Ordenes</span>
                    </li>
                    <li>
                        <LocalShippingOutlinedIcon className='icon' />
                        <span>Envios</span>
                    </li>

                    <p className="title">ESTADISTICAS</p>
                    <li>
                        <SignalCellularAltIcon className='icon' />
                        <span>Graficos</span>
                    </li>
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
                        <span>Desconectarse</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                BOTTOM
            </div>
        </div>
    )
}