import './SearchBar.scss';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


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