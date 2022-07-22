import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../redux/actions';
import { createStore } from 'redux'
// let store = createStore(todos, [ 'Use Redux' ])

const userToken = localStorage.user;
// const dispatch = useDispatch();

function handleDelete(e, id){
    e.preventDefault(e);
    // store.dispatch(deleteProduct(id))
    console.log(id)
}

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
    { 
        field: 'asd',
        headerName: '', 
        headerAlign: 'center', 
        align: 'center',
        width: 50,
        renderCell: (cellValues) => {
            return  <DeleteIcon onClick={(e) => handleDelete(e, cellValues.row.id)} /> 
        },
     }
]


export default columns;