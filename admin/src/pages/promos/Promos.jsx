import './Promos.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SideBar from '../../components/SideBar/SideBar';
import { getAllPromos, deletePromo } from '../../redux/actions';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import List from '../../components/tablepromos/listPromos'

const Promos = () => {

    const dispatch = useDispatch()
    const rows = useSelector(state => state.promos)
    const prods = rows.map(r => r.items.map(t => t.model))
    const userToken = localStorage.user
    useEffect(() => {
        dispatch(getAllPromos(userToken));
    }, [dispatch])

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
        dispatch(getAllPromos(userToken));
    }
    // PARA IMPLEMENTAR EL DELETEPROMO SE TRAJO EL INPUTS Y SE ELIMINO,
    // PORQUE NO ESTABA RECIBIENDO EL DISPATH PARA REALIZAR LA ACCION.
    let columns = [
        { field: 'promoName', headerName: 'Nombre Promoción', width: 220, headerAlign: 'center', align: 'left' },
        { field: 'promo', headerName: 'Promoción', width: 220, headerAlign: 'center', align: 'center' },
        { field: 'description', headerName: 'Descripción', width: 130, headerAlign: 'center', align: 'center' },
        { field: 'price', type: 'number', headerName: 'Precio', width: 70, headerAlign: 'center', align: 'center' },
        { field: 'stock', type: 'number', headerName: 'Disponible', width: 85, headerAlign: 'center', align: 'center' },    
        { 
            field: 'items', 
            headerName: 'Productos', 
            width: 250, 
            headerAlign: 'center', 
            align: 'center', 
            renderCell: (val) => {
                return <Link style={{ textDecoration: "none", color: 'black'}} to={''}>{val.row.items.map(r => r.model).join(', ')}</Link>
            }
        },
        { 
            field: 'delete',
            headerName: 'Editar', 
            headerAlign: 'center', 
            align: 'center',
            width: 60,
            renderCell: (cellValues) => {
                return  <Link style={{ textDecoration: "none", color: 'black'}} to={''}><DeleteIcon onClick={(e) => handleDeletePromo(e, cellValues.row.id)} /> </Link>
            },
         }
    ]
    //--------------------------------------------------------------------------------------------------------------------------------

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