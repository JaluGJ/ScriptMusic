import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';

let columns = [
    { field: 'model', headerName: 'Modelo', width: 130 },
    { field: 'brand', headerName: 'Marca', width: 130 },
    { field: 'image', headerName: 'Imagen', width: 130 },
    { field: 'price', type: 'number', headerName: 'Precio', width: 130 },
    { field: 'category', headerName: 'Categoria', width: 150 },
    { field: 'type', headerName: 'Tipo', width: 180 },
    { field: 'stock', type: 'number', headerName: 'Disponible', width: 120 },
    { field: 'id', headerName: 'ID', width: 250 },
    { 
        field: '',
        headerName: 'EDITAR', 
        width: 70,
        renderCell: (cellValues) => {
            return <Link style={{ textDecoration: "none", color: 'black'}} to={`/products/${cellValues.row.id}`}> <ModeEditIcon /> </Link>
        },
     }
]


export default columns;