import './Promos.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import { getAllPromos } from '../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import List from '../../components/tablepromos/listPromos'

const Promos = () => {

    const dispatch = useDispatch()
    const rows = useSelector(state => state.promos)
    const userToken = localStorage.user

    //--------------------------------------------------------------------------------------------------------------------------------
    function handleDeletePromo(e, id){
        e.preventDefault();
        dispatch(deletePromo(id, userToken))
        toast.success('Promoción Eliminada', {
            position: "top-center",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(getAllPromos());
    }
    // PARA IMPLEMENTAR EL DELETEPROMO SE TRAJO EL INPUTS Y SE ELIMINO,
    // PORQUE NO ESTABA RECIBIENDO EL DISPATH PARA REALIZAR LA ACCION.
    let columns = [
        { 
            field: 'edit',
            headerName: '', 
            headerAlign: 'center', 
            align: 'center',
            width: 30,
            renderCell: (cellValues) => {
                return <Link style={{ textDecoration: "none", color: 'black'}} to={``}> <ModeEditIcon /> </Link>
            },
         },
        { field: 'promo', headerName: 'Promoción', width: 220, headerAlign: 'center', align: 'left' },
        { field: 'description', headerName: 'Descripción', width: 130, headerAlign: 'center', align: 'center' },
        { field: 'price', type: 'number', headerName: 'Precio', width: 70, headerAlign: 'center', align: 'center' },
        { field: 'stock', type: 'number', headerName: 'Disponible', width: 85, headerAlign: 'center', align: 'center' },    
        { field: 'items', headerName: 'Productos', width: 100, headerAlign: 'center', align: 'center' },
        { 
            field: 'delete',
            headerName: '', 
            headerAlign: 'center', 
            align: 'center',
            width: 30,
            renderCell: (cellValues) => {
                return  <Link style={{ textDecoration: "none", color: 'black'}} to={''}><DeleteIcon onClick={(e) => handleDeletePromo(e, cellValues.row.id)} /> </Link>
            },
         }
    ]
    //--------------------------------------------------------------------------------------------------------------------------------
    
    useEffect(() => {
        dispatch(getAllPromos());
    }, [dispatch])

    return(
        <div className="promos">
                <SideBar/>
                <ToastContainer/>
            <div className="container">
                <List 
                tipo= 'Promoción'
                title = 'Promociones existentes'
                rows = {rows}
                columns = {columns}
                /> 
            </div>
        </div>
    )
}

export default Promos;