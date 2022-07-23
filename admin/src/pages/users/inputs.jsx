import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link } from 'react-router-dom';
import { getAllUsers } from '../../redux/actions';

function handleDelete(e, id){
    e.preventDefault();
    dispatch(deleteProduct(id, userToken))
    toast.success('Usuario Eliminado', {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    dispatch(getAllUsers());
}

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
    { field: 'firstName', headerName: 'Nombre', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'lastName', headerName: 'Apellido', width: 150, headerAlign: 'center', align: 'center' },
    { field: 'email',  headerName: 'Email', width: 300, headerAlign: 'center', align: 'center' },
    { field: 'isConfirmed', headerName: 'Validado', width: 100, headerAlign: 'center', align: 'center' }, 
    // { 
    //     field: 'delete',
    //     headerName: '', 
    //     headerAlign: 'center', 
    //     align: 'center',
    //     width: 30,
    //     renderCell: (cellValues) => {
    //         return  <DeleteIcon onClick={(e) => handleDelete(e, cellValues.row.id)} /> 
    //     },
    //  }   
]

export default columns;