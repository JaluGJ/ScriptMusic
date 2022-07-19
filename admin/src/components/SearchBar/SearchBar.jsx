import './NavBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function NavBar(){
    return(
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                <input type="text" placeholder='Buscar...' className="search" />
                <SearchOutlinedIcon/>
                </div>
            </div>
        </div>
    )
}