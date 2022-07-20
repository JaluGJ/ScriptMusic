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
            return <Link style={{ textDecoration: "none", color: 'black'}} to={`/products/${cellValues.row.id}`}> <ModeEditIcon /> </Link>
        },
     },
    { field: 'model', headerName: 'Modelo', width: 220, headerAlign: 'center', align: 'left' },
    { field: 'brand', headerName: 'Marca', width: 130, headerAlign: 'center', align: 'center' },
    { field: 'price', type: 'number', headerName: 'Precio', width: 70, headerAlign: 'center', align: 'center' },
    { field: 'category', headerName: 'Categoria', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'type', headerName: 'Tipo', width: 100, headerAlign: 'center', align: 'center' },
    { field: 'stock', type: 'number', headerName: 'Disponible', width: 85, headerAlign: 'center', align: 'center' },    
]


export default columns;