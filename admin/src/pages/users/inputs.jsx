import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';

let columns = [
    { 
        field: '',
        headerName: '', 
        headerAlign: 'center', 
        align: 'center',
        width: 50,
        renderCell: (cellValues) => {
            return <Link style={{ textDecoration: "none", color: 'black'}} to={`/users/${cellValues.row.id}`}> <ModeEditIcon /> </Link>
        },
     },
    { field: 'firstName', headerName: 'Nombre', width: 220, headerAlign: 'center', align: 'left' },
    { field: 'lastName', headerName: 'Apellido', width: 130, headerAlign: 'center', align: 'left' },
    { field: 'email',  headerName: 'Email', width: 80, headerAlign: 'center', align: 'center' },
    { field: 'isConfirmed', headerName: 'Validado', width: 100, headerAlign: 'center', align: 'center' },    
]


export default columns;